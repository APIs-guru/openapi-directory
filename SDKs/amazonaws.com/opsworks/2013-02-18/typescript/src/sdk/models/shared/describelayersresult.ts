import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Layer } from "./layer";



// DescribeLayersResult
/** 
 * Contains the response to a <code>DescribeLayers</code> request.
**/
export class DescribeLayersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Layers", elemType: Layer })
  layers?: Layer[];
}
