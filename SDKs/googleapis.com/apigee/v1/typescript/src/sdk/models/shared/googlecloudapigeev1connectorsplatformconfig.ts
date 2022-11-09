import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ConnectorsPlatformConfig
/** 
 * Configuration for the Connectors Platform add-on.
**/
export class GoogleCloudApigeeV1ConnectorsPlatformConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;
}
