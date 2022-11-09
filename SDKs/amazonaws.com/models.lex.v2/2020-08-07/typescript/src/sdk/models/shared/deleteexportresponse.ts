import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportStatusEnum } from "./exportstatusenum";


export class DeleteExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportId" })
  exportId?: string;

  @Metadata({ data: "json, name=exportStatus" })
  exportStatus?: ExportStatusEnum;
}
