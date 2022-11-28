import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayerVersionsListItem } from "./layerversionslistitem";



// LayersListItem
/** 
 * Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class LayersListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatestMatchingVersion" })
  latestMatchingVersion?: LayerVersionsListItem;

  @SpeakeasyMetadata({ data: "json, name=LayerArn" })
  layerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerName" })
  layerName?: string;
}
