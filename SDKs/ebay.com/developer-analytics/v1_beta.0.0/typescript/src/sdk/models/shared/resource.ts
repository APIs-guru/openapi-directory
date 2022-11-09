import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rate } from "./rate";


// Resource
/** 
 * This complex type defines the resource (API method) and the current rate-limit data for that resource.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rates", elemType: shared.Rate })
  rates?: Rate[];
}
