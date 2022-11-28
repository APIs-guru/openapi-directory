import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayersListItem } from "./layerslistitem";



export class ListLayersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Layers", elemType: LayersListItem })
  layers?: LayersListItem[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
