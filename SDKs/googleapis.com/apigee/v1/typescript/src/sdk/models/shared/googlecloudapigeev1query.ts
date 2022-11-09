import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1QueryMetric } from "./googlecloudapigeev1querymetric";


export class GoogleCloudApigeeV1Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvDelimiter" })
  csvDelimiter?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=groupByTimeUnit" })
  groupByTimeUnit?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudApigeeV1QueryMetric })
  metrics?: GoogleCloudApigeeV1QueryMetric[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputFormat" })
  outputFormat?: string;

  @Metadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: any;
}
