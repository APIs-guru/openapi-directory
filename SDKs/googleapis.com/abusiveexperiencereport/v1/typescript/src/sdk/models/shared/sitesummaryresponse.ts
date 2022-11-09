import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SiteSummaryResponseAbusiveStatusEnum {
    Unknown = "UNKNOWN"
,    Passing = "PASSING"
,    Failing = "FAILING"
}

export enum SiteSummaryResponseFilterStatusEnum {
    Unknown = "UNKNOWN"
,    On = "ON"
,    Off = "OFF"
,    Paused = "PAUSED"
,    Pending = "PENDING"
}


// SiteSummaryResponse
/** 
 * Response message for GetSiteSummary.
**/
export class SiteSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=abusiveStatus" })
  abusiveStatus?: SiteSummaryResponseAbusiveStatusEnum;

  @Metadata({ data: "json, name=enforcementTime" })
  enforcementTime?: string;

  @Metadata({ data: "json, name=filterStatus" })
  filterStatus?: SiteSummaryResponseFilterStatusEnum;

  @Metadata({ data: "json, name=lastChangeTime" })
  lastChangeTime?: string;

  @Metadata({ data: "json, name=reportUrl" })
  reportUrl?: string;

  @Metadata({ data: "json, name=reviewedSite" })
  reviewedSite?: string;

  @Metadata({ data: "json, name=underReview" })
  underReview?: boolean;
}
