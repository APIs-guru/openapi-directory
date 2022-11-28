import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityReportQueryMetric } from "./googlecloudapigeev1securityreportquerymetric";



// GoogleCloudApigeeV1SecurityReportQuery
/** 
 * Body structure when user makes a request to create a security report.
**/
export class GoogleCloudApigeeV1SecurityReportQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvDelimiter" })
  csvDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=groupByTimeUnit" })
  groupByTimeUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1SecurityReportQueryMetric })
  metrics?: GoogleCloudApigeeV1SecurityReportQueryMetric[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: any;
}
