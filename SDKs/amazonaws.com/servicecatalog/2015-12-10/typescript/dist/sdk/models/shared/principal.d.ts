import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
/**
 * Information about a principal.
**/
export declare class Principal extends SpeakeasyBase {
    principalArn?: string;
    principalType?: PrincipalTypeEnum;
}
