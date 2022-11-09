import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobResponse } from "./importjobresponse";


export class CreateImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobResponse" })
  importJobResponse: ImportJobResponse;
}
