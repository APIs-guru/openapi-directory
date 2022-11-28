import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1CertInfo
/** 
 * X.509 certificate as defined in RFC 5280.
**/
export class GoogleCloudApigeeV1CertInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicConstraints" })
  basicConstraints?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryDate" })
  expiryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=isValid" })
  isValid?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sigAlgName" })
  sigAlgName?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=validFrom" })
  validFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
