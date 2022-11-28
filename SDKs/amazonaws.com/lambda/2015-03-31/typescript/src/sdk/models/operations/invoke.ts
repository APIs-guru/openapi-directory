import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvokePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class InvokeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}

export enum InvokeXAmzInvocationTypeEnum {
    Event = "Event",
    RequestResponse = "RequestResponse",
    DryRun = "DryRun"
}

export enum InvokeXAmzLogTypeEnum {
    None = "None",
    Tail = "Tail"
}


export class InvokeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Context" })
  xAmzClientContext?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Invocation-Type" })
  xAmzInvocationType?: InvokeXAmzInvocationTypeEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Log-Type" })
  xAmzLogType?: InvokeXAmzLogTypeEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class InvokeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Payload" })
  payload?: string;
}


export class InvokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvokePathParams;

  @SpeakeasyMetadata()
  queryParams: InvokeQueryParams;

  @SpeakeasyMetadata()
  headers: InvokeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InvokeRequestBody;
}


export class InvokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ec2AccessDeniedException?: any;

  @SpeakeasyMetadata()
  ec2ThrottledException?: any;

  @SpeakeasyMetadata()
  ec2UnexpectedException?: any;

  @SpeakeasyMetadata()
  efsioException?: any;

  @SpeakeasyMetadata()
  efsMountConnectivityException?: any;

  @SpeakeasyMetadata()
  efsMountFailureException?: any;

  @SpeakeasyMetadata()
  efsMountTimeoutException?: any;

  @SpeakeasyMetadata()
  eniLimitReachedException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  invalidRequestContentException?: any;

  @SpeakeasyMetadata()
  invalidRuntimeException?: any;

  @SpeakeasyMetadata()
  invalidSecurityGroupIdException?: any;

  @SpeakeasyMetadata()
  invalidSubnetIdException?: any;

  @SpeakeasyMetadata()
  invalidZipFileException?: any;

  @SpeakeasyMetadata()
  invocationResponse?: shared.InvocationResponse;

  @SpeakeasyMetadata()
  kmsAccessDeniedException?: any;

  @SpeakeasyMetadata()
  kmsDisabledException?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateException?: any;

  @SpeakeasyMetadata()
  kmsNotFoundException?: any;

  @SpeakeasyMetadata()
  requestTooLargeException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  resourceNotReadyException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subnetIpAddressLimitReachedException?: any;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unsupportedMediaTypeException?: any;
}
