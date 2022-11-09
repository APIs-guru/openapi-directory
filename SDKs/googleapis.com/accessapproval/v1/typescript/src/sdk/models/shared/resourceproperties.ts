import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceProperties
/** 
 * The properties associated with the resource of the request.
**/
export class ResourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludesDescendants" })
  excludesDescendants?: boolean;
}
