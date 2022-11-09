import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHistoryExportResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=history_export_id" })
  historyExportId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetHistoryExportResultsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHistoryExportResultsQueryParams;
}


export class GetHistoryExportResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.HistoryExportResultEntity })
  historyExportResultEntities?: shared.HistoryExportResultEntity[];

  @Metadata()
  statusCode: number;
}
