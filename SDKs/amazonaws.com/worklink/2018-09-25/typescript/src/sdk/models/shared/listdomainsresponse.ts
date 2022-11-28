import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainSummary } from "./domainsummary";



export class ListDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domains", elemType: DomainSummary })
  domains?: DomainSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
