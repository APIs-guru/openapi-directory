import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildingAddress
/** 
 * Public API: Resources.buildings
**/
export class BuildingAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLines" })
  addressLines?: string[];

  @Metadata({ data: "json, name=administrativeArea" })
  administrativeArea?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=sublocality" })
  sublocality?: string;
}
