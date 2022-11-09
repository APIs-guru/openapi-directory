import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScriptParameterKeyValue
/** 
 * A parameter for a studio component script, in the form of a key:value pair.
**/
export class ScriptParameterKeyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
