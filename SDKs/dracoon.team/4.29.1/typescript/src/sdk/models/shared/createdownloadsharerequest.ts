import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
import { FileKey } from "./filekey";
import { UserKeyPairContainer } from "./userkeypaircontainer";



// CreateDownloadShareRequest
/** 
 * Request model for creating a Download Share
**/
export class CreateDownloadShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @SpeakeasyMetadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: UserKeyPairContainer;

  @SpeakeasyMetadata({ data: "json, name=mailBody" })
  mailBody?: string;

  @SpeakeasyMetadata({ data: "json, name=mailRecipients" })
  mailRecipients?: string;

  @SpeakeasyMetadata({ data: "json, name=mailSubject" })
  mailSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId: number;

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

  @SpeakeasyMetadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @SpeakeasyMetadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
