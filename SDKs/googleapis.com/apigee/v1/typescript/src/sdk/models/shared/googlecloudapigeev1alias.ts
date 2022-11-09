import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1Certificate } from "./googlecloudapigeev1certificate";

export enum GoogleCloudApigeeV1AliasTypeEnum {
    AliasTypeUnspecified = "ALIAS_TYPE_UNSPECIFIED"
,    Cert = "CERT"
,    KeyCert = "KEY_CERT"
}


// GoogleCloudApigeeV1Alias
/** 
 * Reference to a certificate or key/certificate pair.
**/
export class GoogleCloudApigeeV1Alias extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=certsInfo" })
  certsInfo?: GoogleCloudApigeeV1Certificate;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1AliasTypeEnum;
}
