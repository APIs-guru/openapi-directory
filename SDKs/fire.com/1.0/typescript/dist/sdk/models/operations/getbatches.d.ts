import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBatchesBatchStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare enum GetBatchesBatchTypesEnum {
    InternalTransfer = "INTERNAL_TRANSFER",
    BankTransfer = "BANK_TRANSFER",
    NewPayee = "NEW_PAYEE"
}
export declare enum GetBatchesOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}
export declare enum GetBatchesOrderByEnum {
    Date = "DATE"
}
export declare class GetBatchesQueryParams extends SpeakeasyBase {
    batchStatus?: GetBatchesBatchStatusEnum;
    batchTypes?: GetBatchesBatchTypesEnum;
    order?: GetBatchesOrderEnum;
    orderBy?: GetBatchesOrderByEnum;
}
/**
 * The outcome of the attempted transaction.
**/
export declare class GetBatchesBatchItemsBatchItemResult extends SpeakeasyBase {
    code?: number;
    message?: string;
}
export declare enum GetBatchesBatchItemsBatchItemStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare class GetBatchesBatchItemsBatchItem extends SpeakeasyBase {
    amount?: number;
    amountAfterCharges?: number;
    batchItemUuid?: string;
    dateCreated?: Date;
    feeAmount?: number;
    icanFrom?: number;
    icanTo?: number;
    lastUpdated?: Date;
    ref?: string;
    refId?: number;
    result?: GetBatchesBatchItemsBatchItemResult;
    status?: GetBatchesBatchItemsBatchItemStatusEnum;
    taxAmount?: number;
}
export declare class GetBatchesBatchItems extends SpeakeasyBase {
    items?: GetBatchesBatchItemsBatchItem[];
    total?: number;
}
export declare class GetBatchesRequest extends SpeakeasyBase {
    queryParams: GetBatchesQueryParams;
}
export declare class GetBatchesResponse extends SpeakeasyBase {
    batchItems?: GetBatchesBatchItems;
    contentType: string;
    statusCode: number;
}
