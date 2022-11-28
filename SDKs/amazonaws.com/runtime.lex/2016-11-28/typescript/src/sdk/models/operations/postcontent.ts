import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAlias" })
  botAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostContentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;

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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-active-contexts" })
  xAmzLexActiveContexts?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-request-attributes" })
  xAmzLexRequestAttributes?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-session-attributes" })
  xAmzLexSessionAttributes?: string;
}


export class PostContentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputStream" })
  inputStream: string;
}


export class PostContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContentPathParams;

  @SpeakeasyMetadata()
  headers: PostContentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostContentRequestBody;
}


export class PostContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badGatewayException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyFailedException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  loopDetectedException?: any;

  @SpeakeasyMetadata()
  notAcceptableException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  postContentResponse?: shared.PostContentResponse;

  @SpeakeasyMetadata()
  requestTimeoutException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedMediaTypeException?: any;
}
