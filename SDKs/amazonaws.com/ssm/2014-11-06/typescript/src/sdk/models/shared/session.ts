import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionManagerOutputUrl } from "./sessionmanageroutputurl";
import { SessionStatusEnum } from "./sessionstatusenum";


// Session
/** 
 * Information about a Session Manager connection to an instance.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=Details" })
  details?: string;

  @Metadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=OutputUrl" })
  outputUrl?: SessionManagerOutputUrl;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: SessionStatusEnum;

  @Metadata({ data: "json, name=Target" })
  target?: string;
}
