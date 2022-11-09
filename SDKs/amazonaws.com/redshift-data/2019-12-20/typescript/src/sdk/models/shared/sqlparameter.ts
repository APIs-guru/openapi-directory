import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlParameter
/** 
 * A parameter used in a SQL statement.
**/
export class SqlParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
