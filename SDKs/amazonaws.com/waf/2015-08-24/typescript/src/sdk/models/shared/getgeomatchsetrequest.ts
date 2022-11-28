import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGeoMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GeoMatchSetId" })
  geoMatchSetId: string;
}
