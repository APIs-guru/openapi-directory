import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamplingTargetDocument
/** 
 * Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
export class SamplingTargetDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FixedRate" })
  fixedRate?: number;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=ReservoirQuota" })
  reservoirQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=ReservoirQuotaTTL" })
  reservoirQuotaTtl?: Date;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName?: string;
}
