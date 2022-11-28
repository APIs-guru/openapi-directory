import { SpeakeasyBase } from "../../../internal/utils";
import { GrantStatusEnum } from "./grantstatusenum";
import { AllowedOperationEnum } from "./allowedoperationenum";
/**
 * Describes a grant.
**/
export declare class Grant extends SpeakeasyBase {
    grantArn: string;
    grantName: string;
    grantStatus: GrantStatusEnum;
    grantedOperations: AllowedOperationEnum[];
    granteePrincipalArn: string;
    homeRegion: string;
    licenseArn: string;
    parentArn: string;
    statusReason?: string;
    version: string;
}
