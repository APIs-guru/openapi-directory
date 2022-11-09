import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPolicy } from "./retentionpolicy";


export class DeleteDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=RetentionPolicy" })
  retentionPolicy?: RetentionPolicy;
}
