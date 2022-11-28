import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";



// CallAnalyticsJobSummary
/** 
 * Provides summary information about a call analytics job.
**/
export class CallAnalyticsJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobStatus" })
  callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
