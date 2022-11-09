import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentName" })
  environmentName: string;
}


export class PublishMetricsHeaders extends SpeakeasyBase {
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


export class PublishMetricsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricData", elemType: shared.MetricDatum })
  metricData: shared.MetricDatum[];
}


export class PublishMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishMetricsPathParams;

  @Metadata()
  headers: PublishMetricsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PublishMetricsRequestBody;
}


export class PublishMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  publishMetricsOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
