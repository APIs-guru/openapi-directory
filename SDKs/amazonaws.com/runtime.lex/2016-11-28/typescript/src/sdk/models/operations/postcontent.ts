import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botAlias" })
  botAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostContentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;

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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-lex-active-contexts" })
  xAmzLexActiveContexts?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-lex-request-attributes" })
  xAmzLexRequestAttributes?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-lex-session-attributes" })
  xAmzLexSessionAttributes?: string;
}


export class PostContentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputStream" })
  inputStream: string;
}


export class PostContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContentPathParams;

  @Metadata()
  headers: PostContentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostContentRequestBody;
}


export class PostContentResponse extends SpeakeasyBase {
  @Metadata()
  badGatewayException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyFailedException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  loopDetectedException?: any;

  @Metadata()
  notAcceptableException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  postContentResponse?: shared.PostContentResponse;

  @Metadata()
  requestTimeoutException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedMediaTypeException?: any;
}
