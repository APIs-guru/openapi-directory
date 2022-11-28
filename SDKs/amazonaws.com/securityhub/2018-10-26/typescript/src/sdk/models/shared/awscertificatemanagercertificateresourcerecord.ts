import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCertificateManagerCertificateResourceRecord
/** 
 * Provides details about the CNAME record that is added to the DNS database for domain validation.
**/
export class AwsCertificateManagerCertificateResourceRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
