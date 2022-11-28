import { SpeakeasyBase } from "../../../internal/utils";
import { DedicatedTenancySupportEnumEnum } from "./dedicatedtenancysupportenumenum";
export declare class ModifyAccountRequest extends SpeakeasyBase {
    dedicatedTenancyManagementCidrRange?: string;
    dedicatedTenancySupport?: DedicatedTenancySupportEnumEnum;
}
