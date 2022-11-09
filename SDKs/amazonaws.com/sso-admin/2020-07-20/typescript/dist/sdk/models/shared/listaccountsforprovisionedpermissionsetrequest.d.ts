import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningStatusEnum } from "./provisioningstatusenum";
export declare class ListAccountsForProvisionedPermissionSetRequest extends SpeakeasyBase {
    instanceArn: string;
    maxResults?: number;
    nextToken?: string;
    permissionSetArn: string;
    provisioningStatus?: ProvisioningStatusEnum;
}
