import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetTypeEnum } from "./targettypeenum";


// Target
/** 
 * The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Type" })
  type: TargetTypeEnum;
}
