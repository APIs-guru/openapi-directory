import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";
import { FileKey } from "./filekey";
import { UserKeyPairContainer } from "./userkeypaircontainer";


// CreateDownloadShareRequest
/** 
 * Request model for creating a Download Share
**/
export class CreateDownloadShareRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @Metadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @Metadata({ data: "json, name=keyPair" })
  keyPair?: UserKeyPairContainer;

  @Metadata({ data: "json, name=mailBody" })
  mailBody?: string;

  @Metadata({ data: "json, name=mailRecipients" })
  mailRecipients?: string;

  @Metadata({ data: "json, name=mailSubject" })
  mailSubject?: string;

  @Metadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeId" })
  nodeId: number;

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

  @Metadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @Metadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
