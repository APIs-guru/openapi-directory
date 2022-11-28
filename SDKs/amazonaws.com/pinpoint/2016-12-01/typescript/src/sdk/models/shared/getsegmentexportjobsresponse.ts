import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobsResponse } from "./exportjobsresponse";



export class GetSegmentExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportJobsResponse" })
  exportJobsResponse: ExportJobsResponse;
}
