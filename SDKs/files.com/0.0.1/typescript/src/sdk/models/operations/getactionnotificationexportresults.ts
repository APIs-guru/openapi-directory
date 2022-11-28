import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetActionNotificationExportResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action_notification_export_id" })
  actionNotificationExportId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetActionNotificationExportResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionNotificationExportResultsQueryParams;
}


export class GetActionNotificationExportResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ActionNotificationExportResultEntity })
  actionNotificationExportResultEntities?: shared.ActionNotificationExportResultEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
