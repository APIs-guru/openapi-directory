import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1SecurityReportQueryMetric
/** 
 * Metric of the Query
**/
export class GoogleCloudApigeeV1SecurityReportQueryMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationFunction" })
  aggregationFunction?: string;

  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
