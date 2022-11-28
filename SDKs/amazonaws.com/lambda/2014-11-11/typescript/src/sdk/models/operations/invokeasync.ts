import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvokeAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class InvokeAsyncHeaders extends SpeakeasyBase {
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


export class InvokeAsyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvokeArgs" })
  invokeArgs: string;
}


export class InvokeAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvokeAsyncPathParams;

  @SpeakeasyMetadata()
  headers: InvokeAsyncHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InvokeAsyncRequestBody;
}


export class InvokeAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestContentException?: shared.InvalidRequestContentException;

  @SpeakeasyMetadata()
  invokeAsyncResponse?: shared.InvokeAsyncResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  serviceException?: shared.ServiceException;

  @SpeakeasyMetadata()
  statusCode: number;
}
