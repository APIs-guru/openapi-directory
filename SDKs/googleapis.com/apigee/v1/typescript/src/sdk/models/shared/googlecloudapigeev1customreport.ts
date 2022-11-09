import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1CustomReportMetric } from "./googlecloudapigeev1customreportmetric";
import { GoogleCloudApigeeV1ReportProperty } from "./googlecloudapigeev1reportproperty";


export class GoogleCloudApigeeV1CustomReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartType" })
  chartType?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=fromTime" })
  fromTime?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=lastViewedAt" })
  lastViewedAt?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudApigeeV1CustomReportMetric })
  metrics?: GoogleCloudApigeeV1CustomReportMetric[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudApigeeV1ReportProperty })
  properties?: GoogleCloudApigeeV1ReportProperty[];

  @Metadata({ data: "json, name=sortByCols" })
  sortByCols?: string[];

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=timeUnit" })
  timeUnit?: string;

  @Metadata({ data: "json, name=toTime" })
  toTime?: string;

  @Metadata({ data: "json, name=topk" })
  topk?: string;
}
