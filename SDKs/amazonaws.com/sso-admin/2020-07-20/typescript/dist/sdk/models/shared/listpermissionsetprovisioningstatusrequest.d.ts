import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusFilter } from "./operationstatusfilter";
export declare class ListPermissionSetProvisioningStatusRequest extends SpeakeasyBase {
    filter?: OperationStatusFilter;
    instanceArn: string;
    maxResults?: number;
    nextToken?: string;
}
