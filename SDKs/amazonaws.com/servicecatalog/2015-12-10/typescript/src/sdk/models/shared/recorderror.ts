import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecordError
/** 
 * The error code and description resulting from an operation.
**/
export class RecordError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}
