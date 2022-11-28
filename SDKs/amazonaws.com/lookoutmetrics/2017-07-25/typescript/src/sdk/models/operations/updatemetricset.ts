import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMetricSetHeaders extends SpeakeasyBase {
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

export enum UpdateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D",
    Pt1H = "PT1H",
    Pt10M = "PT10M",
    Pt5M = "PT5M"
}


// UpdateMetricSetRequestBodyMetricSource
/** 
 * Contains information about source data used to generate a metric.
**/
export class UpdateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
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


// UpdateMetricSetRequestBodyTimestampColumn
/** 
 * Contains information about the column used to track time in a source data file.
**/
export class UpdateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnFormat" })
  columnFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName?: string;
}


export class UpdateMetricSetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionList" })
  dimensionList?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetricList", elemType: shared.Metric })
  metricList?: shared.Metric[];

  @SpeakeasyMetadata({ data: "json, name=MetricSetArn" })
  metricSetArn: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetFrequency" })
  metricSetFrequency?: UpdateMetricSetRequestBodyMetricSetFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricSource" })
  metricSource?: UpdateMetricSetRequestBodyMetricSource;

  @SpeakeasyMetadata({ data: "json, name=Offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=TimestampColumn" })
  timestampColumn?: UpdateMetricSetRequestBodyTimestampColumn;
}


export class UpdateMetricSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateMetricSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMetricSetRequestBody;
}


export class UpdateMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateMetricSetResponse?: shared.UpdateMetricSetResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
