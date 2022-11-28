import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";



// Target
/** 
 * The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: TargetTypeEnum;
}
