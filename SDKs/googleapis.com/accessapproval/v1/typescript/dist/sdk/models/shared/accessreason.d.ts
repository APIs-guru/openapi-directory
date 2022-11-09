import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AccessReasonTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    CustomerInitiatedSupport = "CUSTOMER_INITIATED_SUPPORT",
    GoogleInitiatedService = "GOOGLE_INITIATED_SERVICE",
    GoogleInitiatedReview = "GOOGLE_INITIATED_REVIEW",
    ThirdPartyDataRequest = "THIRD_PARTY_DATA_REQUEST",
    GoogleResponseToProductionAlert = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
}
export declare class AccessReason extends SpeakeasyBase {
    detail?: string;
    type?: AccessReasonTypeEnum;
}
