import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateName" })
  certificateName: string;

  @Metadata({ data: "json, name=domainName" })
  domainName: string;

  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
