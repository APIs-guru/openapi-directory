import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeHintEnum } from "./typehintenum";
import { Field } from "./field";



// SqlParameter
/** 
 * A parameter used in a SQL statement.
**/
export class SqlParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=typeHint" })
  typeHint?: TypeHintEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Field;
}
