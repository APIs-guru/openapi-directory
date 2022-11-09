import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainEntry } from "./domainentry";


export class DeleteDomainEntryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainEntry" })
  domainEntry: DomainEntry;

  @Metadata({ data: "json, name=domainName" })
  domainName: string;
}
