import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceInfo
/** 
 * The information about the resource.
**/
export class ResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
