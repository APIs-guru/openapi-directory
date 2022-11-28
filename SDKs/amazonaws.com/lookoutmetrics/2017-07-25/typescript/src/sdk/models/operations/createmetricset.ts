import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMetricSetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D",
    Pt1H = "PT1H",
    Pt10M = "PT10M",
    Pt5M = "PT5M"
}


// CreateMetricSetRequestBodyMetricSource
/** 
 * Contains information about source data used to generate a metric.
**/
export class CreateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppFlowConfig" })
  appFlowConfig?: shared.AppFlowConfig;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchConfig" })
  cloudWatchConfig?: shared.CloudWatchConfig;

  @SpeakeasyMetadata({ data: "json, name=RDSSourceConfig" })
  rdsSourceConfig?: shared.RdsSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=RedshiftSourceConfig" })
  redshiftSourceConfig?: shared.RedshiftSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=S3SourceConfig" })
  s3SourceConfig?: shared.S3SourceConfig;
}


// CreateMetricSetRequestBodyTimestampColumn
/** 
 * Contains information about the column used to track time in a source data file.
**/
export class CreateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnFormat" })
  columnFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName?: string;
}


export class CreateMetricSetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @SpeakeasyMetadata({ data: "json, name=DimensionList" })
  dimensionList?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetricList", elemType: shared.Metric })
  metricList: shared.Metric[];

  @SpeakeasyMetadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetFrequency" })
  metricSetFrequency?: CreateMetricSetRequestBodyMetricSetFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricSetName" })
  metricSetName: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSource" })
  metricSource: CreateMetricSetRequestBodyMetricSource;

  @SpeakeasyMetadata({ data: "json, name=Offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TimestampColumn" })
  timestampColumn?: CreateMetricSetRequestBodyTimestampColumn;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}


export class CreateMetricSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateMetricSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateMetricSetRequestBody;
}


export class CreateMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createMetricSetResponse?: shared.CreateMetricSetResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
