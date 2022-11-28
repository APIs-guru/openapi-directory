import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Details about license consumption.
**/
export declare class ConsumedLicenseSummary extends SpeakeasyBase {
    consumedLicenses?: number;
    resourceType?: ResourceTypeEnum;
}
