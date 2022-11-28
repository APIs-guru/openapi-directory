import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceProperties
/** 
 * The properties associated with the resource of the request.
**/
export class ResourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludesDescendants" })
  excludesDescendants?: boolean;
}
