import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PutFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}


export class PutFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutFunctionEventInvokeConfigRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class PutFunctionEventInvokeConfigRequestBodyDestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @Metadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


export class PutFunctionEventInvokeConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: PutFunctionEventInvokeConfigRequestBodyDestinationConfig;

  @Metadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}


export class PutFunctionEventInvokeConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutFunctionEventInvokeConfigPathParams;

  @Metadata()
  queryParams: PutFunctionEventInvokeConfigQueryParams;

  @Metadata()
  headers: PutFunctionEventInvokeConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutFunctionEventInvokeConfigRequestBody;
}


export class PutFunctionEventInvokeConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  functionEventInvokeConfig?: shared.FunctionEventInvokeConfig;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
