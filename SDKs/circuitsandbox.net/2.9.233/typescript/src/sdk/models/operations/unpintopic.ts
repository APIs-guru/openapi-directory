import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnpinTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class UnpinTopicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnpinTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnpinTopicPathParams;

  @Metadata()
  security: UnpinTopicSecurity;
}


export class UnpinTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
