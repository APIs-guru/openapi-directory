import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceSummary
/** 
 * A summary of a resource available on the device.
**/
export class ResourceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;
}
