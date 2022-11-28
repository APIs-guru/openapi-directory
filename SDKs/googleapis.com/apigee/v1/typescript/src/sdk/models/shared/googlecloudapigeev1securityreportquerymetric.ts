import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1SecurityReportQueryMetric
/** 
 * Metric of the Query
**/
export class GoogleCloudApigeeV1SecurityReportQueryMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationFunction" })
  aggregationFunction?: string;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
