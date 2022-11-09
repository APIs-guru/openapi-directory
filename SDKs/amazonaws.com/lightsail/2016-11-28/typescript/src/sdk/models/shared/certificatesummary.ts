import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";
import { Tag } from "./tag";


// CertificateSummary
/** 
 * Describes an Amazon Lightsail SSL/TLS certificate.
**/
export class CertificateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateDetail" })
  certificateDetail?: Certificate;

  @Metadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
