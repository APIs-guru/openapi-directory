import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaultRootCauseEntity } from "./faultrootcauseentity";



// FaultRootCauseService
/** 
 * A collection of fields identifying the services in a trace summary fault.
**/
export class FaultRootCauseService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityPath", elemType: FaultRootCauseEntity })
  entityPath?: FaultRootCauseEntity[];

  @SpeakeasyMetadata({ data: "json, name=Inferred" })
  inferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
