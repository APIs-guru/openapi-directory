import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Value
/** 
 * A complex type that contains a value, plus the veracity of that value.
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicable" })
  applicable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
