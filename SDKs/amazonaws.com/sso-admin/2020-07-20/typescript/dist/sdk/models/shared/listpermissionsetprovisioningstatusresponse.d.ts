import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionSetProvisioningStatusMetadata } from "./permissionsetprovisioningstatusmetadata";
export declare class ListPermissionSetProvisioningStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    permissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[];
}
