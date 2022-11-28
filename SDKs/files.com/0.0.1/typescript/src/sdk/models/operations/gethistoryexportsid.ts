import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHistoryExportsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetHistoryExportsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHistoryExportsIdPathParams;
}


export class GetHistoryExportsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  historyExportEntity?: shared.HistoryExportEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
