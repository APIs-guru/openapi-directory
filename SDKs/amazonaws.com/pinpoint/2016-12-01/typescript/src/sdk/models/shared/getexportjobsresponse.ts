import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobsResponse } from "./exportjobsresponse";



export class GetExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportJobsResponse" })
  exportJobsResponse: ExportJobsResponse;
}
