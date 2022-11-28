import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Details about the usage of a resource associated with a license configuration.
**/
export declare class LicenseConfigurationUsage extends SpeakeasyBase {
    associationTime?: Date;
    consumedLicenses?: number;
    resourceArn?: string;
    resourceOwnerId?: string;
    resourceStatus?: string;
    resourceType?: ResourceTypeEnum;
}
