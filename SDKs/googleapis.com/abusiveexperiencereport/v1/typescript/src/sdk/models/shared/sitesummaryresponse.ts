import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SiteSummaryResponseAbusiveStatusEnum {
    Unknown = "UNKNOWN",
    Passing = "PASSING",
    Failing = "FAILING"
}

export enum SiteSummaryResponseFilterStatusEnum {
    Unknown = "UNKNOWN",
    On = "ON",
    Off = "OFF",
    Paused = "PAUSED",
    Pending = "PENDING"
}


// SiteSummaryResponse
/** 
 * Response message for GetSiteSummary.
**/
export class SiteSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abusiveStatus" })
  abusiveStatus?: SiteSummaryResponseAbusiveStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=enforcementTime" })
  enforcementTime?: string;

  @SpeakeasyMetadata({ data: "json, name=filterStatus" })
  filterStatus?: SiteSummaryResponseFilterStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastChangeTime" })
  lastChangeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=reportUrl" })
  reportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewedSite" })
  reviewedSite?: string;

  @SpeakeasyMetadata({ data: "json, name=underReview" })
  underReview?: boolean;
}
