import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
**/
export declare class Target extends SpeakeasyBase {
    id?: string;
    type: TargetTypeEnum;
}
