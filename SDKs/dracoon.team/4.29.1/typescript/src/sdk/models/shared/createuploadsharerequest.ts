import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// CreateUploadShareRequest
/** 
 * Request model for creating an Upload Share
**/
export class CreateUploadShareRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @Metadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @Metadata({ data: "json, name=mailBody" })
  mailBody?: string;

  @Metadata({ data: "json, name=mailRecipients" })
  mailRecipients?: string;

  @Metadata({ data: "json, name=mailSubject" })
  mailSubject?: string;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=maxSlots" })
  maxSlots?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=notifyCreator" })
  notifyCreator?: boolean;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @Metadata({ data: "json, name=sendMail" })
  sendMail?: boolean;

  @Metadata({ data: "json, name=sendSms" })
  sendSms?: boolean;

  @Metadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @Metadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @Metadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @Metadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId: number;

  @Metadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
