import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The outcome of the attempted transaction.
**/
export declare class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult extends SpeakeasyBase {
    code?: number;
    message?: string;
}
export declare enum OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems extends SpeakeasyBase {
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
    result?: OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult;
    status?: OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum;
    taxAmount?: number;
}
