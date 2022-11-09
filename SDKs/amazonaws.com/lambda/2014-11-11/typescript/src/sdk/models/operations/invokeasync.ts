import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvokeAsyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class InvokeAsyncHeaders extends SpeakeasyBase {
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


export class InvokeAsyncRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvokeArgs" })
  invokeArgs: string;
}


export class InvokeAsyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InvokeAsyncPathParams;

  @Metadata()
  headers: InvokeAsyncHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: InvokeAsyncRequestBody;
}


export class InvokeAsyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestContentException?: shared.InvalidRequestContentException;

  @Metadata()
  invokeAsyncResponse?: shared.InvokeAsyncResponse;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  serviceException?: shared.ServiceException;

  @Metadata()
  statusCode: number;
}
