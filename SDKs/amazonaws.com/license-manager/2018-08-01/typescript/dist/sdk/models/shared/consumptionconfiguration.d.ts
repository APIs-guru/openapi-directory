import { SpeakeasyBase } from "../../../internal/utils";
import { BorrowConfiguration } from "./borrowconfiguration";
import { ProvisionalConfiguration } from "./provisionalconfiguration";
import { RenewTypeEnum } from "./renewtypeenum";
/**
 * Details about a consumption configuration.
**/
export declare class ConsumptionConfiguration extends SpeakeasyBase {
    borrowConfiguration?: BorrowConfiguration;
    provisionalConfiguration?: ProvisionalConfiguration;
    renewType?: RenewTypeEnum;
}
