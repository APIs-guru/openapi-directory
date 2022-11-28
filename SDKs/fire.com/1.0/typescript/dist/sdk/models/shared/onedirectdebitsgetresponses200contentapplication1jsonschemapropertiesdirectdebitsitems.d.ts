import { SpeakeasyBase } from "../../../internal/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";
export declare enum OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    A = "A",
    B = "B"
}
export declare enum OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum {
    Recieved = "RECIEVED",
    RejectRequested = "REJECT_REQUESTED",
    RejectReadyForProcessing = "REJECT_READY_FOR_PROCESSING",
    RejectRecordInProgress = "REJECT_RECORD_IN_PROGRESS",
    RejectRecorded = "REJECT_RECORDED",
    RejectFileCreated = "REJECT_FILE_CREATED",
    RejectFileSent = "REJECT_FILE_SENT",
    Collected = "COLLECTED",
    RefundRequested = "REFUND_REQUESTED",
    RefundRecordInProgress = "REFUND_RECORD_IN_PROGRESS",
    RefundRecorded = "REFUND_RECORDED",
    RefundFileCreated = "REFUND_FILE_CREATED",
    RefundFileSent = "REFUND_FILE_SENT"
}
export declare enum OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum {
    FirstCollection = "FIRST_COLLECTION",
    OngoingCollection = "ONGOING_COLLECTION",
    RepresentedCollection = "REPRESENTED_COLLECTION",
    FinalCollection = "FINAL_COLLECTION"
}
export declare class OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems extends SpeakeasyBase {
    amount?: number;
    currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    dateCreated?: Date;
    directDebitReference?: string;
    directDebitUuid?: string;
    isDdic?: boolean;
    lastUpdated?: Date;
    mandateUUid?: string;
    originatorAlias?: string;
    originatorName?: string;
    originatorReference?: string;
    schemeRejectReason?: string;
    schemeRejectReasonCode?: OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum;
    status?: OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum;
    targetIcan?: number;
    targetPayeeId?: number;
    type?: OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum;
}
