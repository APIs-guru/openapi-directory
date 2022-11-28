import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";


export enum BasicLevelCombiningFunctionEnum {
    And = "AND",
    Or = "OR"
}


// BasicLevel
/** 
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
export class BasicLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combiningFunction" })
  combiningFunction?: BasicLevelCombiningFunctionEnum;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: Condition })
  conditions?: Condition[];
}
