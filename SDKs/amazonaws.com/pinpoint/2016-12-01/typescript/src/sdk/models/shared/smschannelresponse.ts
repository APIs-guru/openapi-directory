import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SmsChannelResponse
/** 
 * Provides information about the status and settings of the SMS channel for an application.
**/
export class SmsChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=HasCredential" })
  hasCredential?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IsArchived" })
  isArchived?: boolean;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=Platform" })
  platform: string;

  @Metadata({ data: "json, name=PromotionalMessagesPerSecond" })
  promotionalMessagesPerSecond?: number;

  @Metadata({ data: "json, name=SenderId" })
  senderId?: string;

  @Metadata({ data: "json, name=ShortCode" })
  shortCode?: string;

  @Metadata({ data: "json, name=TransactionalMessagesPerSecond" })
  transactionalMessagesPerSecond?: number;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
