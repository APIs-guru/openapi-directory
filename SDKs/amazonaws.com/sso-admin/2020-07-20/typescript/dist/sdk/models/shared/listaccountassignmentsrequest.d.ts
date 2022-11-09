import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListAccountAssignmentsRequest extends SpeakeasyBase {
    accountId: string;
    instanceArn: string;
    maxResults?: number;
    nextToken?: string;
    permissionSetArn: string;
}
