import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvokePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class InvokeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier?: string;
}

export enum InvokeXAmzInvocationTypeEnum {
    Event = "Event"
,    RequestResponse = "RequestResponse"
,    DryRun = "DryRun"
}

export enum InvokeXAmzLogTypeEnum {
    None = "None"
,    Tail = "Tail"
}


export class InvokeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Context" })
  xAmzClientContext?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Invocation-Type" })
  xAmzInvocationType?: InvokeXAmzInvocationTypeEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Log-Type" })
  xAmzLogType?: InvokeXAmzLogTypeEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class InvokeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Payload" })
  payload?: string;
}


export class InvokeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InvokePathParams;

  @Metadata()
  queryParams: InvokeQueryParams;

  @Metadata()
  headers: InvokeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: InvokeRequestBody;
}


export class InvokeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ec2AccessDeniedException?: any;

  @Metadata()
  ec2ThrottledException?: any;

  @Metadata()
  ec2UnexpectedException?: any;

  @Metadata()
  efsioException?: any;

  @Metadata()
  efsMountConnectivityException?: any;

  @Metadata()
  efsMountFailureException?: any;

  @Metadata()
  efsMountTimeoutException?: any;

  @Metadata()
  eniLimitReachedException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidRequestContentException?: any;

  @Metadata()
  invalidRuntimeException?: any;

  @Metadata()
  invalidSecurityGroupIdException?: any;

  @Metadata()
  invalidSubnetIdException?: any;

  @Metadata()
  invalidZipFileException?: any;

  @Metadata()
  invocationResponse?: shared.InvocationResponse;

  @Metadata()
  kmsAccessDeniedException?: any;

  @Metadata()
  kmsDisabledException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  kmsNotFoundException?: any;

  @Metadata()
  requestTooLargeException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceNotReadyException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetIpAddressLimitReachedException?: any;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedMediaTypeException?: any;
}
