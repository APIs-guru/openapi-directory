import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionManagerOutputUrl } from "./sessionmanageroutputurl";
import { SessionStatusEnum } from "./sessionstatusenum";



// Session
/** 
 * Information about a Session Manager connection to an instance.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OutputUrl" })
  outputUrl?: SessionManagerOutputUrl;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SessionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;
}
