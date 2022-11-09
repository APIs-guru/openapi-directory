import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Layer } from "./layer";


// DescribeLayersResult
/** 
 * Contains the response to a <code>DescribeLayers</code> request.
**/
export class DescribeLayersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Layers", elemType: shared.Layer })
  layers?: Layer[];
}
