import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackApiSpecRequest
/** 
 * Request message for RollbackApiSpec.
**/
export class RollbackApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
