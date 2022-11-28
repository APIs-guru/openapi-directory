import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobsResponse } from "./importjobsresponse";



export class GetImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobsResponse" })
  importJobsResponse: ImportJobsResponse;
}
