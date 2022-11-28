import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigInput
/** 
 * Available configurations to provision an Instance.
**/
export class ConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmekKeyName" })
  cmekKeyName?: string;
}
