import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainInfo } from "./domaininfo";



// DomainInfos
/** 
 * Contains a paginated collection of DomainInfo structures.
**/
export class DomainInfos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainInfos", elemType: DomainInfo })
  domainInfos: DomainInfo[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
