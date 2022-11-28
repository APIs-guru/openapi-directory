import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class UpdateFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}


export class UpdateFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
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


// UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @SpeakeasyMetadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


export class UpdateFunctionEventInvokeConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}


export class UpdateFunctionEventInvokeConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFunctionEventInvokeConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateFunctionEventInvokeConfigQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateFunctionEventInvokeConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionEventInvokeConfigRequestBody;
}


export class UpdateFunctionEventInvokeConfigResponse extends SpeakeasyBase {
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
