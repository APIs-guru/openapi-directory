import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTopicTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class UpdateTopicTagsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=tags;" })
  tags: string[];
}


export class UpdateTopicTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateTopicTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTopicTagsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: UpdateTopicTagsRequestBody;

  @Metadata()
  security: UpdateTopicTagsSecurity;
}


export class UpdateTopicTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceTopic?: any;

  @Metadata()
  statusCode: number;
}
