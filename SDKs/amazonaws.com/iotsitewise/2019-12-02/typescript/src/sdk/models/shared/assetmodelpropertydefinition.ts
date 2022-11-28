import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";



// AssetModelPropertyDefinition
/** 
 * Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
**/
export class AssetModelPropertyDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: PropertyDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataTypeSpec" })
  dataTypeSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PropertyType;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
