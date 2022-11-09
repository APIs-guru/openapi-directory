import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LayerVersionsListItem } from "./layerversionslistitem";


export class ListLayerVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LayerVersions", elemType: shared.LayerVersionsListItem })
  layerVersions?: LayerVersionsListItem[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
