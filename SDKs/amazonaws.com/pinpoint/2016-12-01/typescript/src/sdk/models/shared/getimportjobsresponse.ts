import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobsResponse } from "./importjobsresponse";


export class GetImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobsResponse" })
  importJobsResponse: ImportJobsResponse;
}
