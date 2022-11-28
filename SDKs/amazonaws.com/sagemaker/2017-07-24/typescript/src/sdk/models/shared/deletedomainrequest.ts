import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionPolicy } from "./retentionpolicy";



export class DeleteDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionPolicy" })
  retentionPolicy?: RetentionPolicy;
}
