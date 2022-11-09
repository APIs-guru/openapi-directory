import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LayersListItem } from "./layerslistitem";
export declare class ListLayersResponse extends SpeakeasyBase {
    layers?: LayersListItem[];
    nextMarker?: string;
}
