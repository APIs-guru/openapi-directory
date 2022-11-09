import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1CertInfo
/** 
 * X.509 certificate as defined in RFC 5280.
**/
export class GoogleCloudApigeeV1CertInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicConstraints" })
  basicConstraints?: string;

  @Metadata({ data: "json, name=expiryDate" })
  expiryDate?: string;

  @Metadata({ data: "json, name=isValid" })
  isValid?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=sigAlgName" })
  sigAlgName?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=validFrom" })
  validFrom?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
