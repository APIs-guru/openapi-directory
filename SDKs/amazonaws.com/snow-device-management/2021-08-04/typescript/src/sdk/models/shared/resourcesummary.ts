import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceSummary
/** 
 * A summary of a resource available on the device.
**/
export class ResourceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}
