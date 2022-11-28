import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResponse } from "./importjobresponse";



export class GetImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobResponse" })
  importJobResponse: ImportJobResponse;
}
