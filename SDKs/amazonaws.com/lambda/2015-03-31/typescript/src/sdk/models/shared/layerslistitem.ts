import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LayerVersionsListItem } from "./layerversionslistitem";


// LayersListItem
/** 
 * Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class LayersListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatestMatchingVersion" })
  latestMatchingVersion?: LayerVersionsListItem;

  @Metadata({ data: "json, name=LayerArn" })
  layerArn?: string;

  @Metadata({ data: "json, name=LayerName" })
  layerName?: string;
}
