import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";


// AssetModelProperty
/** 
 * Contains information about an asset model property.
**/
export class AssetModelProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType: PropertyDataTypeEnum;

  @Metadata({ data: "json, name=dataTypeSpec" })
  dataTypeSpec?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: PropertyType;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
