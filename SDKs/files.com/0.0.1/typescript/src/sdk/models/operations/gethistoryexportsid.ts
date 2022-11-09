import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHistoryExportsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetHistoryExportsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHistoryExportsIdPathParams;
}


export class GetHistoryExportsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  historyExportEntity?: shared.HistoryExportEntity;

  @Metadata()
  statusCode: number;
}
