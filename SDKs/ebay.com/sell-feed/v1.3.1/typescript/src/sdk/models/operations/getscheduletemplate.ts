import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduleTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_template_id" })
  scheduleTemplateId: string;
}


export class GetScheduleTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetScheduleTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduleTemplatePathParams;

  @SpeakeasyMetadata()
  security: GetScheduleTemplateSecurity;
}


export class GetScheduleTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleTemplateResponse?: shared.ScheduleTemplateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
