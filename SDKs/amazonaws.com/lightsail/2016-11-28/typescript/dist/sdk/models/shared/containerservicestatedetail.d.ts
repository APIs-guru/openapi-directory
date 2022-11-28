import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceStateDetailCodeEnum } from "./containerservicestatedetailcodeenum";
/**
 * Describes the current state of a container service.
**/
export declare class ContainerServiceStateDetail extends SpeakeasyBase {
    code?: ContainerServiceStateDetailCodeEnum;
    message?: string;
}
