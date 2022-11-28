import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScriptParameterKeyValue
/** 
 * A parameter for a studio component script, in the form of a key:value pair.
**/
export class ScriptParameterKeyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
