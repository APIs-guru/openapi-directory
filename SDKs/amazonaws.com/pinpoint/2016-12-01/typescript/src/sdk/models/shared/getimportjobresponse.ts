import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobResponse } from "./importjobresponse";


export class GetImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobResponse" })
  importJobResponse: ImportJobResponse;
}
