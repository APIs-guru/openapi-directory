import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildingAddress
/** 
 * Public API: Resources.buildings
**/
export class BuildingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLines" })
  addressLines?: string[];

  @SpeakeasyMetadata({ data: "json, name=administrativeArea" })
  administrativeArea?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sublocality" })
  sublocality?: string;
}
