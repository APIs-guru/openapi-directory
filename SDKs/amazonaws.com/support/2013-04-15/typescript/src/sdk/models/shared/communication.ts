import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentDetails } from "./attachmentdetails";



// Communication
/** 
 * A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
**/
export class Communication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentSet", elemType: AttachmentDetails })
  attachmentSet?: AttachmentDetails[];

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=submittedBy" })
  submittedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=timeCreated" })
  timeCreated?: string;
}
