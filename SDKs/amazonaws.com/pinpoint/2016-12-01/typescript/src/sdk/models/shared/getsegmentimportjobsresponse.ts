import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobsResponse } from "./importjobsresponse";



export class GetSegmentImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobsResponse" })
  importJobsResponse: ImportJobsResponse;
}
