import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LayersListItem } from "./layerslistitem";


export class ListLayersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Layers", elemType: shared.LayersListItem })
  layers?: LayersListItem[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
