import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApnsChannelResponse
/** 
 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
**/
export class ApnsChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=DefaultAuthenticationMethod" })
  defaultAuthenticationMethod?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=HasCredential" })
  hasCredential?: boolean;

  @Metadata({ data: "json, name=HasTokenKey" })
  hasTokenKey?: boolean;

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

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
