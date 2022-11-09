import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtraParamNameEnum } from "./extraparamnameenum";


// ExtraParam
/** 
 * ExtraParam includes the following elements.
**/
export class ExtraParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: ExtraParamNameEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
