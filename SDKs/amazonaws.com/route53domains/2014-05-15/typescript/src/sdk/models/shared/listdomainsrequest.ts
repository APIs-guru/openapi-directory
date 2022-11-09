import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDomainsRequest
/** 
 * The ListDomains request includes the following elements.
**/
export class ListDomainsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxItems" })
  maxItems?: number;
}
