import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropertyGroup
/** 
 * Property key-value pairs passed into an application.
**/
export class PropertyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyGroupId" })
  propertyGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=PropertyMap" })
  propertyMap: Map<string, string>;
}
