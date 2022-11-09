import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class V2GetTopicWithRepliesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class V2GetTopicWithRepliesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfReplies" })
  numberOfReplies?: number;
}


export class V2GetTopicWithRepliesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2GetTopicWithRepliesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: V2GetTopicWithRepliesPathParams;

  @Metadata()
  queryParams: V2GetTopicWithRepliesQueryParams;

  @Metadata()
  security: V2GetTopicWithRepliesSecurity;
}


export class V2GetTopicWithRepliesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceTopicWithReplies?: any;

  @Metadata()
  statusCode: number;
}
