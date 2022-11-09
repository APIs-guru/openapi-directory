import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackApiSpecRequest
/** 
 * Request message for RollbackApiSpec.
**/
export class RollbackApiSpecRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
