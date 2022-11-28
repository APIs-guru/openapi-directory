import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_id" })
  scheduleId: string;
}


export class GetScheduleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchedulePathParams;

  @SpeakeasyMetadata()
  security: GetScheduleSecurity;
}


export class GetScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userScheduleResponse?: shared.UserScheduleResponse;
}
