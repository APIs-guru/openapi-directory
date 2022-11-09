import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduleTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=schedule_template_id" })
  scheduleTemplateId: string;
}


export class GetScheduleTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetScheduleTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScheduleTemplatePathParams;

  @Metadata()
  security: GetScheduleTemplateSecurity;
}


export class GetScheduleTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleTemplateResponse?: shared.ScheduleTemplateResponse;

  @Metadata()
  statusCode: number;
}
