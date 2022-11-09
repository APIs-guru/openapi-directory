import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeoMatchSetSummary } from "./geomatchsetsummary";


export class ListGeoMatchSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GeoMatchSets", elemType: shared.GeoMatchSetSummary })
  geoMatchSets?: GeoMatchSetSummary[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
