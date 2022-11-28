import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseTimeRootCauseEntity } from "./responsetimerootcauseentity";



// ResponseTimeRootCauseService
/** 
 * A collection of fields identifying the service in a response time warning.
**/
export class ResponseTimeRootCauseService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityPath", elemType: ResponseTimeRootCauseEntity })
  entityPath?: ResponseTimeRootCauseEntity[];

  @SpeakeasyMetadata({ data: "json, name=Inferred" })
  inferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
