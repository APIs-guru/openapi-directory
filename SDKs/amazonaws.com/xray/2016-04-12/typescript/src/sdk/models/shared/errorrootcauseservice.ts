import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorRootCauseEntity } from "./errorrootcauseentity";


// ErrorRootCauseService
/** 
 * A collection of fields identifying the services in a trace summary error.
**/
export class ErrorRootCauseService extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=EntityPath", elemType: shared.ErrorRootCauseEntity })
  entityPath?: ErrorRootCauseEntity[];

  @Metadata({ data: "json, name=Inferred" })
  inferred?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
