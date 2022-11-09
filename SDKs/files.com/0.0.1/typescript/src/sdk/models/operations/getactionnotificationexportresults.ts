import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetActionNotificationExportResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action_notification_export_id" })
  actionNotificationExportId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetActionNotificationExportResultsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionNotificationExportResultsQueryParams;
}


export class GetActionNotificationExportResultsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ActionNotificationExportResultEntity })
  actionNotificationExportResultEntities?: shared.ActionNotificationExportResultEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
