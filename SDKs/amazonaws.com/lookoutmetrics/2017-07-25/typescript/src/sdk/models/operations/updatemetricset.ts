import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMetricSetHeaders extends SpeakeasyBase {
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

export enum UpdateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D"
,    Pt1H = "PT1H"
,    Pt10M = "PT10M"
,    Pt5M = "PT5M"
}


// UpdateMetricSetRequestBodyMetricSource
/** 
 * Contains information about source data used to generate a metric.
**/
export class UpdateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
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


// UpdateMetricSetRequestBodyTimestampColumn
/** 
 * Contains information about the column used to track time in a source data file.
**/
export class UpdateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnFormat" })
  columnFormat?: string;

  @Metadata({ data: "json, name=ColumnName" })
  columnName?: string;
}


export class UpdateMetricSetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionList" })
  dimensionList?: string[];

  @Metadata({ data: "json, name=MetricList", elemType: shared.Metric })
  metricList?: shared.Metric[];

  @Metadata({ data: "json, name=MetricSetArn" })
  metricSetArn: string;

  @Metadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @Metadata({ data: "json, name=MetricSetFrequency" })
  metricSetFrequency?: UpdateMetricSetRequestBodyMetricSetFrequencyEnum;

  @Metadata({ data: "json, name=MetricSource" })
  metricSource?: UpdateMetricSetRequestBodyMetricSource;

  @Metadata({ data: "json, name=Offset" })
  offset?: number;

  @Metadata({ data: "json, name=TimestampColumn" })
  timestampColumn?: UpdateMetricSetRequestBodyTimestampColumn;
}


export class UpdateMetricSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateMetricSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMetricSetRequestBody;
}


export class UpdateMetricSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateMetricSetResponse?: shared.UpdateMetricSetResponse;

  @Metadata()
  validationException?: any;
}
