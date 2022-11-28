import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGeoMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=GeoMatchSetId" })
  geoMatchSetId: string;
}
