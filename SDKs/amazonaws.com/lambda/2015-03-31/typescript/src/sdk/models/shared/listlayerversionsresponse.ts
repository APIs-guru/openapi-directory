import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayerVersionsListItem } from "./layerversionslistitem";



export class ListLayerVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerVersions", elemType: LayerVersionsListItem })
  layerVersions?: LayerVersionsListItem[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
