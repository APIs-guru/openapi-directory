import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes an association with a license configuration.
**/
export declare class LicenseConfigurationAssociation extends SpeakeasyBase {
    amiAssociationScope?: string;
    associationTime?: Date;
    resourceArn?: string;
    resourceOwnerId?: string;
    resourceType?: ResourceTypeEnum;
}
