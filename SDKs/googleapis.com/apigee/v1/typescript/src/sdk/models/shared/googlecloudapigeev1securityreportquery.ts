import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1SecurityReportQueryMetric } from "./googlecloudapigeev1securityreportquerymetric";


// GoogleCloudApigeeV1SecurityReportQuery
/** 
 * Body structure when user makes a request to create a security report.
**/
export class GoogleCloudApigeeV1SecurityReportQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvDelimiter" })
  csvDelimiter?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=groupByTimeUnit" })
  groupByTimeUnit?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudApigeeV1SecurityReportQueryMetric })
  metrics?: GoogleCloudApigeeV1SecurityReportQueryMetric[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: any;
}
