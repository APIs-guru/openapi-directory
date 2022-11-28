import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1QueryMetric } from "./googlecloudapigeev1querymetric";



export class GoogleCloudApigeeV1Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvDelimiter" })
  csvDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=envgroupHostname" })
  envgroupHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=groupByTimeUnit" })
  groupByTimeUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1QueryMetric })
  metrics?: GoogleCloudApigeeV1QueryMetric[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputFormat" })
  outputFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDefinitionId" })
  reportDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: any;
}
