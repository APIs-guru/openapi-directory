import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoMatchSetSummary } from "./geomatchsetsummary";



export class ListGeoMatchSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GeoMatchSets", elemType: GeoMatchSetSummary })
  geoMatchSets?: GeoMatchSetSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
