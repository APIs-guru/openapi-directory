import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SmsChannelResponse
/** 
 * Provides information about the status and settings of the SMS channel for an application.
**/
export class SmsChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasCredential" })
  hasCredential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform: string;

  @SpeakeasyMetadata({ data: "json, name=PromotionalMessagesPerSecond" })
  promotionalMessagesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=SenderId" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShortCode" })
  shortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionalMessagesPerSecond" })
  transactionalMessagesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
