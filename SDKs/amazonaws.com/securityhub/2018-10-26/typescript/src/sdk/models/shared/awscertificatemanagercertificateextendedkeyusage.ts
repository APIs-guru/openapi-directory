import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCertificateManagerCertificateExtendedKeyUsage
/** 
 * Contains information about an extended key usage X.509 v3 extension object.
**/
export class AwsCertificateManagerCertificateExtendedKeyUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OId" })
  oId?: string;
}
