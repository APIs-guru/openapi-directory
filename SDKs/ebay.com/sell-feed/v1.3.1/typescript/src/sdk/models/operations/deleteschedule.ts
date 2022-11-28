import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_id" })
  scheduleId: string;
}


export class DeleteScheduleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSchedulePathParams;

  @SpeakeasyMetadata()
  security: DeleteScheduleSecurity;
}


export class DeleteScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
