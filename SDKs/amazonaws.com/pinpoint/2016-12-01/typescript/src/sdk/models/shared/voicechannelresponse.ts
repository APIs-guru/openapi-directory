import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VoiceChannelResponse
/** 
 * Provides information about the status and settings of the voice channel for an application.
**/
export class VoiceChannelResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
