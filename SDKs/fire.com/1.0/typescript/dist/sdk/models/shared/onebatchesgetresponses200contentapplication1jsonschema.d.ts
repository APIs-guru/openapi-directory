import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The outcome of the attempted transaction.
**/
export declare class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult extends SpeakeasyBase {
    code?: number;
    message?: string;
}
export declare enum OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem extends SpeakeasyBase {
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
    result?: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult;
    status?: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum;
    taxAmount?: number;
}
export declare class OnebatchesGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    items?: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem[];
    total?: number;
}
