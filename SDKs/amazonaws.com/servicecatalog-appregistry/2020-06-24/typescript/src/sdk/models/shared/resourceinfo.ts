import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceInfo
/** 
 * The information about the resource.
**/
export class ResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
