import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResponse } from "./exportjobresponse";



export class CreateExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportJobResponse" })
  exportJobResponse: ExportJobResponse;
}
