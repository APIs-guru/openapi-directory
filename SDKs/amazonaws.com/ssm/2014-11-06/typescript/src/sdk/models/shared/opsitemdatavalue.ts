import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItemDataTypeEnum } from "./opsitemdatatypeenum";


// OpsItemDataValue
/** 
 * An object that defines the value of the key and its type in the OperationalData map.
**/
export class OpsItemDataValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: OpsItemDataTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
