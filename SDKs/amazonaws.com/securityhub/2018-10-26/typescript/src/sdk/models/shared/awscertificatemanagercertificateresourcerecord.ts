import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCertificateManagerCertificateResourceRecord
/** 
 * Provides details about the CNAME record that is added to the DNS database for domain validation.
**/
export class AwsCertificateManagerCertificateResourceRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
