import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccessReasonTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    CustomerInitiatedSupport = "CUSTOMER_INITIATED_SUPPORT"
,    GoogleInitiatedService = "GOOGLE_INITIATED_SERVICE"
,    GoogleInitiatedReview = "GOOGLE_INITIATED_REVIEW"
,    ThirdPartyDataRequest = "THIRD_PARTY_DATA_REQUEST"
,    GoogleResponseToProductionAlert = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
}


export class AccessReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=type" })
  type?: AccessReasonTypeEnum;
}
