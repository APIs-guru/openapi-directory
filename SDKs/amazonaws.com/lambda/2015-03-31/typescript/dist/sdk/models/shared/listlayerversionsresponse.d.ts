import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LayerVersionsListItem } from "./layerversionslistitem";
export declare class ListLayerVersionsResponse extends SpeakeasyBase {
    layerVersions?: LayerVersionsListItem[];
    nextMarker?: string;
}
