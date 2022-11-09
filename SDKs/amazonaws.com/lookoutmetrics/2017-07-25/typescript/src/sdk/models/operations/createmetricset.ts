import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMetricSetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D"
,    Pt1H = "PT1H"
,    Pt10M = "PT10M"
,    Pt5M = "PT5M"
}


// CreateMetricSetRequestBodyMetricSource
/** 
 * Contains information about source data used to generate a metric.
**/
export class CreateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppFlowConfig" })
  appFlowConfig?: shared.AppFlowConfig;

  @Metadata({ data: "json, name=CloudWatchConfig" })
  cloudWatchConfig?: shared.CloudWatchConfig;

  @Metadata({ data: "json, name=RDSSourceConfig" })
  rdsSourceConfig?: shared.RdsSourceConfig;

  @Metadata({ data: "json, name=RedshiftSourceConfig" })
  redshiftSourceConfig?: shared.RedshiftSourceConfig;

  @Metadata({ data: "json, name=S3SourceConfig" })
  s3SourceConfig?: shared.S3SourceConfig;
}


// CreateMetricSetRequestBodyTimestampColumn
/** 
 * Contains information about the column used to track time in a source data file.
**/
export class CreateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnFormat" })
  columnFormat?: string;

  @Metadata({ data: "json, name=ColumnName" })
  columnName?: string;
}


export class CreateMetricSetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @Metadata({ data: "json, name=DimensionList" })
  dimensionList?: string[];

  @Metadata({ data: "json, name=MetricList", elemType: shared.Metric })
  metricList: shared.Metric[];

  @Metadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @Metadata({ data: "json, name=MetricSetFrequency" })
  metricSetFrequency?: CreateMetricSetRequestBodyMetricSetFrequencyEnum;

  @Metadata({ data: "json, name=MetricSetName" })
  metricSetName: string;

  @Metadata({ data: "json, name=MetricSource" })
  metricSource: CreateMetricSetRequestBodyMetricSource;

  @Metadata({ data: "json, name=Offset" })
  offset?: number;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=TimestampColumn" })
  timestampColumn?: CreateMetricSetRequestBodyTimestampColumn;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}


export class CreateMetricSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMetricSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateMetricSetRequestBody;
}


export class CreateMetricSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createMetricSetResponse?: shared.CreateMetricSetResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
