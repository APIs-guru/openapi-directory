import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class V2GetTopicWithRepliesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class V2GetTopicWithRepliesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfReplies" })
  numberOfReplies?: number;
}


export class V2GetTopicWithRepliesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2GetTopicWithRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: V2GetTopicWithRepliesPathParams;

  @SpeakeasyMetadata()
  queryParams: V2GetTopicWithRepliesQueryParams;

  @SpeakeasyMetadata()
  security: V2GetTopicWithRepliesSecurity;
}


export class V2GetTopicWithRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceTopicWithReplies?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
