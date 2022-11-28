import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResponse } from "./importjobresponse";



export class CreateImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobResponse" })
  importJobResponse: ImportJobResponse;
}
