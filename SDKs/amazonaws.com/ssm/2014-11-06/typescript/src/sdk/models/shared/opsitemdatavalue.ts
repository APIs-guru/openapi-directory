import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemDataTypeEnum } from "./opsitemdatatypeenum";



// OpsItemDataValue
/** 
 * An object that defines the value of the key and its type in the OperationalData map.
**/
export class OpsItemDataValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OpsItemDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
