import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCertificateManagerCertificateExtendedKeyUsage
/** 
 * Contains information about an extended key usage X.509 v3 extension object.
**/
export class AwsCertificateManagerCertificateExtendedKeyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OId" })
  oId?: string;
}
