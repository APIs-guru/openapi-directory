import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { Tag } from "./tag";



// CertificateSummary
/** 
 * Describes an Amazon Lightsail SSL/TLS certificate.
**/
export class CertificateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateDetail" })
  certificateDetail?: Certificate;

  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
