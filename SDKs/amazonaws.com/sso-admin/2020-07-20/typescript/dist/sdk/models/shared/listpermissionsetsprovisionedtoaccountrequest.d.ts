import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningStatusEnum } from "./provisioningstatusenum";
export declare class ListPermissionSetsProvisionedToAccountRequest extends SpeakeasyBase {
    accountId: string;
    instanceArn: string;
    maxResults?: number;
    nextToken?: string;
    provisioningStatus?: ProvisioningStatusEnum;
}
