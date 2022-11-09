import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1TlsInfoCommonName } from "./googlecloudapigeev1tlsinfocommonname";


// GoogleCloudApigeeV1TlsInfo
/** 
 * TLS configuration information for virtual hosts and TargetServers.
**/
export class GoogleCloudApigeeV1TlsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ciphers" })
  ciphers?: string[];

  @Metadata({ data: "json, name=clientAuthEnabled" })
  clientAuthEnabled?: boolean;

  @Metadata({ data: "json, name=commonName" })
  commonName?: GoogleCloudApigeeV1TlsInfoCommonName;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=ignoreValidationErrors" })
  ignoreValidationErrors?: boolean;

  @Metadata({ data: "json, name=keyAlias" })
  keyAlias?: string;

  @Metadata({ data: "json, name=keyStore" })
  keyStore?: string;

  @Metadata({ data: "json, name=protocols" })
  protocols?: string[];

  @Metadata({ data: "json, name=trustStore" })
  trustStore?: string;
}
