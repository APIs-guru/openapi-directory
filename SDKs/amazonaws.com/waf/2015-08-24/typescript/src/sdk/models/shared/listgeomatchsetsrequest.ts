import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListGeoMatchSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
