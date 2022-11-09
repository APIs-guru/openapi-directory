import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AsanaResource
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class AsanaResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
