import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHistoryExportResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=history_export_id" })
  historyExportId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetHistoryExportResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHistoryExportResultsQueryParams;
}


export class GetHistoryExportResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.HistoryExportResultEntity })
  historyExportResultEntities?: shared.HistoryExportResultEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
