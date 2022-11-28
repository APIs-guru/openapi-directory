import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainMapping } from "./domainmapping";



// ListDomainMappingsResponse
/** 
 * Response message for DomainMappings.ListDomainMappings.
**/
export class ListDomainMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainMappings", elemType: DomainMapping })
  domainMappings?: DomainMapping[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
