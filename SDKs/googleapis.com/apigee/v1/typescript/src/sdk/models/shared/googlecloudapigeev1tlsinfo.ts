import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TlsInfoCommonName } from "./googlecloudapigeev1tlsinfocommonname";



// GoogleCloudApigeeV1TlsInfo
/** 
 * TLS configuration information for virtual hosts and TargetServers.
**/
export class GoogleCloudApigeeV1TlsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ciphers" })
  ciphers?: string[];

  @SpeakeasyMetadata({ data: "json, name=clientAuthEnabled" })
  clientAuthEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: GoogleCloudApigeeV1TlsInfoCommonName;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreValidationErrors" })
  ignoreValidationErrors?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyAlias" })
  keyAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=keyStore" })
  keyStore?: string;

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: string[];

  @SpeakeasyMetadata({ data: "json, name=trustStore" })
  trustStore?: string;
}
