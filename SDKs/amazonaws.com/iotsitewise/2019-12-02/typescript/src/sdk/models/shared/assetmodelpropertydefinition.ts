import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";


// AssetModelPropertyDefinition
/** 
 * Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
**/
export class AssetModelPropertyDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType: PropertyDataTypeEnum;

  @Metadata({ data: "json, name=dataTypeSpec" })
  dataTypeSpec?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: PropertyType;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
