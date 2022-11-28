import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFunctionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}

export enum UploadFunctionModeEnum {
    Event = "event"
}

export enum UploadFunctionRuntimeEnum {
    Nodejs = "nodejs"
}


export class UploadFunctionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Handler" })
  handler: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Mode" })
  mode: UploadFunctionModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Role" })
  role: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Runtime" })
  runtime: UploadFunctionRuntimeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timeout" })
  timeout?: number;
}


export class UploadFunctionHeaders extends SpeakeasyBase {
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


export class UploadFunctionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FunctionZip" })
  functionZip: string;
}


export class UploadFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFunctionPathParams;

  @SpeakeasyMetadata()
  queryParams: UploadFunctionQueryParams;

  @SpeakeasyMetadata()
  headers: UploadFunctionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UploadFunctionRequestBody;
}


export class UploadFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @SpeakeasyMetadata()
  invalidParameterValueException?: shared.InvalidParameterValueException;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  serviceException?: shared.ServiceException;

  @SpeakeasyMetadata()
  statusCode: number;
}
