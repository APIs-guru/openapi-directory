import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PropertyGroup
/** 
 * Property key-value pairs passed into an application.
**/
export class PropertyGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyGroupId" })
  propertyGroupId: string;

  @Metadata({ data: "json, name=PropertyMap" })
  propertyMap: Map<string, string>;
}
