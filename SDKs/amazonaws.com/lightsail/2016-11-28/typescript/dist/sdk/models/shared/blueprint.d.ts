import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePlatformEnum } from "./instanceplatformenum";
import { BlueprintTypeEnum } from "./blueprinttypeenum";
/**
 * Describes a blueprint (a virtual private server image).
**/
export declare class Blueprint extends SpeakeasyBase {
    blueprintId?: string;
    description?: string;
    group?: string;
    isActive?: boolean;
    licenseUrl?: string;
    minPower?: number;
    name?: string;
    platform?: InstancePlatformEnum;
    productUrl?: string;
    type?: BlueprintTypeEnum;
    version?: string;
    versionCode?: string;
}
