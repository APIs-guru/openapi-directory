import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResponse } from "./exportjobresponse";



export class GetExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportJobResponse" })
  exportJobResponse: ExportJobResponse;
}
