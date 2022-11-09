import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PublishVersionHeaders extends SpeakeasyBase {
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


export class PublishVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;
}


export class PublishVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishVersionPathParams;

  @Metadata()
  headers: PublishVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PublishVersionRequestBody;
}


export class PublishVersionResponse extends SpeakeasyBase {
  @Metadata()
  codeStorageExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  preconditionFailedException?: any;

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
