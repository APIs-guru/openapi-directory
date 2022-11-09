import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainMapping } from "./domainmapping";


// ListDomainMappingsResponse
/** 
 * Response message for DomainMappings.ListDomainMappings.
**/
export class ListDomainMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainMappings", elemType: shared.DomainMapping })
  domainMappings?: DomainMapping[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
