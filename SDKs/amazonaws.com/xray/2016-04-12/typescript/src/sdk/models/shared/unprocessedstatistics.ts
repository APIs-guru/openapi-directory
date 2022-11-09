import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnprocessedStatistics
/** 
 * Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process.
**/
export class UnprocessedStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=RuleName" })
  ruleName?: string;
}
