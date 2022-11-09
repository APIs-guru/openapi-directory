import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecordError
/** 
 * The error code and description resulting from an operation.
**/
export class RecordError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}
