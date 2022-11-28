import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedStatistics
/** 
 * Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process.
**/
export class UnprocessedStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName?: string;
}
