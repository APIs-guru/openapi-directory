import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHookEventsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetHookEventsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetHookEventsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetHookEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetHookEventsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetHookEventsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetHookEventsSecurityOption3;
}


export class GetHookEventsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetHookEventsSecurity;
}


export class GetHookEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subjectTypes?: shared.SubjectTypes;
}
