import { SpeakeasyBase } from "../../../internal/utils";
import { UnitEnum } from "./unitenum";
/**
 * Specifies a current quota for an Amazon Macie account.
**/
export declare class ServiceLimit extends SpeakeasyBase {
    isServiceLimited?: boolean;
    unit?: UnitEnum;
    value?: number;
}
