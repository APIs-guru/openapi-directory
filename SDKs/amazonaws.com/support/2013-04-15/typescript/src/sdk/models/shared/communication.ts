import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentDetails } from "./attachmentdetails";


// Communication
/** 
 * A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
**/
export class Communication extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentSet", elemType: shared.AttachmentDetails })
  attachmentSet?: AttachmentDetails[];

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=caseId" })
  caseId?: string;

  @Metadata({ data: "json, name=submittedBy" })
  submittedBy?: string;

  @Metadata({ data: "json, name=timeCreated" })
  timeCreated?: string;
}
