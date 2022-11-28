import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDomainsRequest
/** 
 * The ListDomains request includes the following elements.
**/
export class ListDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxItems" })
  maxItems?: number;
}
