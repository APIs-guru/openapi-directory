import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateUploadShareRequest
/** 
 * Request model for updating an Upload Share
**/
export class UpdateUploadShareRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultCountry" })
  defaultCountry?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @Metadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

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

  @Metadata({ data: "json, name=resetFilesExpiryPeriod" })
  resetFilesExpiryPeriod?: boolean;

  @Metadata({ data: "json, name=resetMaxSize" })
  resetMaxSize?: boolean;

  @Metadata({ data: "json, name=resetMaxSlots" })
  resetMaxSlots?: boolean;

  @Metadata({ data: "json, name=resetPassword" })
  resetPassword?: boolean;

  @Metadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @Metadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @Metadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @Metadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
