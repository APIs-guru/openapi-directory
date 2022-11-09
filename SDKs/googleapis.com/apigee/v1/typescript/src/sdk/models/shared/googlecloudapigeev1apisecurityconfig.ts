import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ApiSecurityConfig
/** 
 * Configurations of the API Security add-on.
**/
export class GoogleCloudApigeeV1ApiSecurityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;
}
