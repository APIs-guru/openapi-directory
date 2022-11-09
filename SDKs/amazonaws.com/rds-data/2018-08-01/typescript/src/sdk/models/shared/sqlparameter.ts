import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeHintEnum } from "./typehintenum";
import { Field } from "./field";


// SqlParameter
/** 
 * A parameter used in a SQL statement.
**/
export class SqlParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=typeHint" })
  typeHint?: TypeHintEnum;

  @Metadata({ data: "json, name=value" })
  value?: Field;
}
