import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";



// AssetModelProperty
/** 
 * Contains information about an asset model property.
**/
export class AssetModelProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: PropertyDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataTypeSpec" })
  dataTypeSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PropertyType;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
