import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";


// CallAnalyticsJobSummary
/** 
 * Provides summary information about a call analytics job.
**/
export class CallAnalyticsJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName?: string;

  @Metadata({ data: "json, name=CallAnalyticsJobStatus" })
  callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;

  @Metadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
