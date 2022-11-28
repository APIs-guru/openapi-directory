import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorRootCauseEntity } from "./errorrootcauseentity";



// ErrorRootCauseService
/** 
 * A collection of fields identifying the services in a trace summary error.
**/
export class ErrorRootCauseService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityPath", elemType: ErrorRootCauseEntity })
  entityPath?: ErrorRootCauseEntity[];

  @SpeakeasyMetadata({ data: "json, name=Inferred" })
  inferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
