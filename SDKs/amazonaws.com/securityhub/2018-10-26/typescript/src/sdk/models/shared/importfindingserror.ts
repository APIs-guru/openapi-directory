import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportFindingsError
/** 
 * The list of the findings that cannot be imported. For each finding, the list provides the error.
**/
export class ImportFindingsError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
