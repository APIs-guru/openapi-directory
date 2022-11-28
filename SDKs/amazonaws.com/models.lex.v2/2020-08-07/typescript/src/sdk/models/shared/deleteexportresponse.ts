import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";



export class DeleteExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId?: string;

  @SpeakeasyMetadata({ data: "json, name=exportStatus" })
  exportStatus?: ExportStatusEnum;
}
