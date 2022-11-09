import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportFindingsError
/** 
 * The list of the findings that cannot be imported. For each finding, the list provides the error.
**/
export class ImportFindingsError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage: string;

  @Metadata({ data: "json, name=Id" })
  id: string;
}
