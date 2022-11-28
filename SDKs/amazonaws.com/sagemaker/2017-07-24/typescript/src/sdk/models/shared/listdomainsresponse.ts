import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainDetails } from "./domaindetails";



export class ListDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domains", elemType: DomainDetails })
  domains?: DomainDetails[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
