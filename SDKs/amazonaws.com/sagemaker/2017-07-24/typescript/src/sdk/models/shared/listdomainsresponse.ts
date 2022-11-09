import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainDetails } from "./domaindetails";


export class ListDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domains", elemType: shared.DomainDetails })
  domains?: DomainDetails[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
