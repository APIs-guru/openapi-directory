import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Condition } from "./condition";

export enum BasicLevelCombiningFunctionEnum {
    And = "AND"
,    Or = "OR"
}


// BasicLevel
/** 
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
export class BasicLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=combiningFunction" })
  combiningFunction?: BasicLevelCombiningFunctionEnum;

  @Metadata({ data: "json, name=conditions", elemType: shared.Condition })
  conditions?: Condition[];
}
