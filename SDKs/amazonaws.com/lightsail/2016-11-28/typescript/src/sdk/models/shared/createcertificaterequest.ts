import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
