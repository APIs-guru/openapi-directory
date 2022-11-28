import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1CustomReportMetric } from "./googlecloudapigeev1customreportmetric";
import { GoogleCloudApigeeV1ReportProperty } from "./googlecloudapigeev1reportproperty";



export class GoogleCloudApigeeV1CustomReportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartType" })
  chartType?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string[];

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=fromTime" })
  fromTime?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1CustomReportMetric })
  metrics?: GoogleCloudApigeeV1CustomReportMetric[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudApigeeV1ReportProperty })
  properties?: GoogleCloudApigeeV1ReportProperty[];

  @SpeakeasyMetadata({ data: "json, name=sortByCols" })
  sortByCols?: string[];

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=toTime" })
  toTime?: string;

  @SpeakeasyMetadata({ data: "json, name=topk" })
  topk?: string;
}


export class GoogleCloudApigeeV1CustomReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartType" })
  chartType?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=fromTime" })
  fromTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=lastViewedAt" })
  lastViewedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1CustomReportMetric })
  metrics?: GoogleCloudApigeeV1CustomReportMetric[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudApigeeV1ReportProperty })
  properties?: GoogleCloudApigeeV1ReportProperty[];

  @SpeakeasyMetadata({ data: "json, name=sortByCols" })
  sortByCols?: string[];

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=toTime" })
  toTime?: string;

  @SpeakeasyMetadata({ data: "json, name=topk" })
  topk?: string;
}
