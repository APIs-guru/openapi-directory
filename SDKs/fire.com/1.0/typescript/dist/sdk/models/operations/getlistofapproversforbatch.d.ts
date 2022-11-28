import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetListofApproversForBatchPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare class GetListofApproversForBatchBatchApproversApprovals extends SpeakeasyBase {
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    lastUpdated?: Date;
    mobileNumber?: string;
    status?: string;
    userId?: number;
}
export declare class GetListofApproversForBatchBatchApprovers extends SpeakeasyBase {
    approvals?: GetListofApproversForBatchBatchApproversApprovals[];
}
export declare class GetListofApproversForBatchRequest extends SpeakeasyBase {
    pathParams: GetListofApproversForBatchPathParams;
}
export declare class GetListofApproversForBatchResponse extends SpeakeasyBase {
    batchApprovers?: GetListofApproversForBatchBatchApprovers;
    contentType: string;
    statusCode: number;
}
