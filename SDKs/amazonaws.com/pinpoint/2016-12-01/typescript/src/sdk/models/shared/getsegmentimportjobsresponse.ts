import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobsResponse } from "./importjobsresponse";


export class GetSegmentImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobsResponse" })
  importJobsResponse: ImportJobsResponse;
}
