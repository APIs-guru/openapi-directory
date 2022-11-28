import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtraParamNameEnum } from "./extraparamnameenum";



// ExtraParam
/** 
 * ExtraParam includes the following elements.
**/
export class ExtraParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: ExtraParamNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
