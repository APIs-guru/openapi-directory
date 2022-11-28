import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlParameter
/** 
 * A parameter used in a SQL statement.
**/
export class SqlParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
