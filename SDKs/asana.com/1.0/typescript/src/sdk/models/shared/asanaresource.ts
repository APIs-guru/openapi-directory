import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AsanaResource
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class AsanaResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
