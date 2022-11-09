import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseTimeRootCauseEntity } from "./responsetimerootcauseentity";


// ResponseTimeRootCauseService
/** 
 * A collection of fields identifying the service in a response time warning.
**/
export class ResponseTimeRootCauseService extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=EntityPath", elemType: shared.ResponseTimeRootCauseEntity })
  entityPath?: ResponseTimeRootCauseEntity[];

  @Metadata({ data: "json, name=Inferred" })
  inferred?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
