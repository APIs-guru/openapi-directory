import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetHookEventsSubjectTypeSubjectTypeEnum {
    Workspace = "workspace",
    User = "user",
    Repository = "repository",
    Team = "team"
}


export class GetHookEventsSubjectTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subject_type" })
  subjectType: GetHookEventsSubjectTypeSubjectTypeEnum;
}


export class GetHookEventsSubjectTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetHookEventsSubjectTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHookEventsSubjectTypePathParams;

  @SpeakeasyMetadata()
  security: GetHookEventsSubjectTypeSecurity;
}


export class GetHookEventsSubjectTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedHookEvents?: shared.PaginatedHookEvents;
}
