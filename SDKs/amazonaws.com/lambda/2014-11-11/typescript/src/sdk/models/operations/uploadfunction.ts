import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFunctionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}

export enum UploadFunctionModeEnum {
    Event = "event"
}

export enum UploadFunctionRuntimeEnum {
    Nodejs = "nodejs"
}


export class UploadFunctionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Handler" })
  handler: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Mode" })
  mode: UploadFunctionModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Role" })
  role: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Runtime" })
  runtime: UploadFunctionRuntimeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timeout" })
  timeout?: number;
}


export class UploadFunctionHeaders extends SpeakeasyBase {
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


export class UploadFunctionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FunctionZip" })
  functionZip: string;
}


export class UploadFunctionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadFunctionPathParams;

  @Metadata()
  queryParams: UploadFunctionQueryParams;

  @Metadata()
  headers: UploadFunctionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UploadFunctionRequestBody;
}


export class UploadFunctionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @Metadata()
  invalidParameterValueException?: shared.InvalidParameterValueException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  serviceException?: shared.ServiceException;

  @Metadata()
  statusCode: number;
}
