import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetResourceMetricsXAmzTargetEnum {
    PerformanceInsightsv20180227GetResourceMetrics = "PerformanceInsightsv20180227.GetResourceMetrics"
}


export class GetResourceMetricsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetResourceMetricsXAmzTargetEnum;
}


export class GetResourceMetricsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetResourceMetricsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResourceMetricsRequest;
}


export class GetResourceMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourceMetricsResponse?: shared.GetResourceMetricsResponse;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  statusCode: number;
}
