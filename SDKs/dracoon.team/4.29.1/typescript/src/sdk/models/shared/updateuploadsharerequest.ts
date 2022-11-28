import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// UpdateUploadShareRequest
/** 
 * Request model for updating an Upload Share
**/
export class UpdateUploadShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultCountry" })
  defaultCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

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

  @SpeakeasyMetadata({ data: "json, name=resetFilesExpiryPeriod" })
  resetFilesExpiryPeriod?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resetMaxSize" })
  resetMaxSize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resetMaxSlots" })
  resetMaxSlots?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resetPassword" })
  resetPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textMessageRecipients" })
  textMessageRecipients?: string[];
}
