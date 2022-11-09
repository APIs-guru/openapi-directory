import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportJobsResponse } from "./exportjobsresponse";


export class GetExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportJobsResponse" })
  exportJobsResponse: ExportJobsResponse;
}
