import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Certificate } from "./googlecloudapigeev1certificate";


export enum GoogleCloudApigeeV1AliasTypeEnum {
    AliasTypeUnspecified = "ALIAS_TYPE_UNSPECIFIED",
    Cert = "CERT",
    KeyCert = "KEY_CERT"
}


// GoogleCloudApigeeV1Alias
/** 
 * Reference to a certificate or key/certificate pair.
**/
export class GoogleCloudApigeeV1Alias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=certsInfo" })
  certsInfo?: GoogleCloudApigeeV1Certificate;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1AliasTypeEnum;
}
