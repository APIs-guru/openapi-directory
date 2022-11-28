import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEntry } from "./domainentry";



export class DeleteDomainEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainEntry" })
  domainEntry: DomainEntry;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;
}
