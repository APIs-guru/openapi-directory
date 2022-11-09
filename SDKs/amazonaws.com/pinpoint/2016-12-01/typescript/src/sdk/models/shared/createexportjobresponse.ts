import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportJobResponse } from "./exportjobresponse";


export class CreateExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportJobResponse" })
  exportJobResponse: ExportJobResponse;
}
