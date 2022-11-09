import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=schedule_id" })
  scheduleId: string;
}


export class UpdateScheduleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSchedulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUserScheduleRequest;

  @Metadata()
  security: UpdateScheduleSecurity;
}


export class UpdateScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
