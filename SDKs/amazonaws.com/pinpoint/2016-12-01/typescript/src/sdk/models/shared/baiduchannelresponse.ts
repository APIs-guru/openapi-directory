import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BaiduChannelResponse
/** 
 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
**/
export class BaiduChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Credential" })
  credential: string;

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

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
