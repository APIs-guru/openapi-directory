import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailChannelResponse
/** 
 * Provides information about the status and settings of the email channel for an application.
**/
export class EmailChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationSet" })
  configurationSet?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=HasCredential" })
  hasCredential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=IsArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=MessagesPerSecond" })
  messagesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
