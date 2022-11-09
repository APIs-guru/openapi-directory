import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainInfo } from "./domaininfo";


// DomainInfos
/** 
 * Contains a paginated collection of DomainInfo structures.
**/
export class DomainInfos extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainInfos", elemType: shared.DomainInfo })
  domainInfos: DomainInfo[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
