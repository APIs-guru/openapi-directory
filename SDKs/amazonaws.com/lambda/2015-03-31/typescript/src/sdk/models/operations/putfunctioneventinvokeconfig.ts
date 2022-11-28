import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PutFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}


export class PutFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutFunctionEventInvokeConfigRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class PutFunctionEventInvokeConfigRequestBodyDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @SpeakeasyMetadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


export class PutFunctionEventInvokeConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: PutFunctionEventInvokeConfigRequestBodyDestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}


export class PutFunctionEventInvokeConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutFunctionEventInvokeConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: PutFunctionEventInvokeConfigQueryParams;

  @SpeakeasyMetadata()
  headers: PutFunctionEventInvokeConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutFunctionEventInvokeConfigRequestBody;
}


export class PutFunctionEventInvokeConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  functionEventInvokeConfig?: shared.FunctionEventInvokeConfig;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
