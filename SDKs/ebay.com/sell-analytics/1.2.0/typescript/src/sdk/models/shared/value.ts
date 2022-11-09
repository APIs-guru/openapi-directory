import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Value
/** 
 * A complex type that contains a value, plus the veracity of that value.
**/
export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicable" })
  applicable?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
