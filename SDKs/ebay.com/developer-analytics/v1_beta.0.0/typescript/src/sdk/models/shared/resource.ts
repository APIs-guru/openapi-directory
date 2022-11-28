import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rate } from "./rate";



// Resource
/** 
 * This complex type defines the resource (API method) and the current rate-limit data for that resource.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rates", elemType: Rate })
  rates?: Rate[];
}
