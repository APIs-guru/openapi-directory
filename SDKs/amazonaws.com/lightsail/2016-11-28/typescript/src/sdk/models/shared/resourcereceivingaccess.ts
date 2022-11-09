import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceReceivingAccess
/** 
 * Describes an Amazon Lightsail instance that has access to a Lightsail bucket.
**/
export class ResourceReceivingAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
