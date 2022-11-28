import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTopicTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class UpdateTopicTagsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=tags;" })
  tags: string[];
}


export class UpdateTopicTagsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateTopicTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTopicTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UpdateTopicTagsRequestBody;

  @SpeakeasyMetadata()
  security: UpdateTopicTagsSecurity;
}


export class UpdateTopicTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceTopic?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
