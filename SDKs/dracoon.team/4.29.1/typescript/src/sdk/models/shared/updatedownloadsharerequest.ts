import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateDownloadShareRequest
/** 
 * Request model for updating a Download Share
**/
export class UpdateDownloadShareRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultCountry" })
  defaultCountry?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @Metadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

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

  @Metadata({ data: "json, name=resetMaxDownloads" })
  resetMaxDownloads?: boolean;

  @Metadata({ data: "json, name=resetPassword" })
  resetPassword?: boolean;

  @Metadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @Metadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @Metadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
