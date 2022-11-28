import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAlias" })
  botAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostTextHeaders extends SpeakeasyBase {
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


export class PostTextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: shared.ActiveContext[];

  @SpeakeasyMetadata({ data: "json, name=inputText" })
  inputText: string;

  @SpeakeasyMetadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
}


export class PostTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTextPathParams;

  @SpeakeasyMetadata()
  headers: PostTextHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostTextRequestBody;
}


export class PostTextResponse extends SpeakeasyBase {
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
  notFoundException?: any;

  @SpeakeasyMetadata()
  postTextResponse?: shared.PostTextResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
