import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// CreateUploadShareRequest
/** 
 * Request model for creating an Upload Share
**/
export class CreateUploadShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=mailBody" })
  mailBody?: string;

  @SpeakeasyMetadata({ data: "json, name=mailRecipients" })
  mailRecipients?: string;

  @SpeakeasyMetadata({ data: "json, name=mailSubject" })
  mailSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSlots" })
  maxSlots?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=notifyCreator" })
  notifyCreator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=sendMail" })
  sendMail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sendSms" })
  sendSms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId: number;

  @SpeakeasyMetadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
