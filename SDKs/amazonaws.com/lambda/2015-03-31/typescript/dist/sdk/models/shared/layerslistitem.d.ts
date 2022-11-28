import { SpeakeasyBase } from "../../../internal/utils";
import { LayerVersionsListItem } from "./layerversionslistitem";
/**
 * Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export declare class LayersListItem extends SpeakeasyBase {
    latestMatchingVersion?: LayerVersionsListItem;
    layerArn?: string;
    layerName?: string;
}
