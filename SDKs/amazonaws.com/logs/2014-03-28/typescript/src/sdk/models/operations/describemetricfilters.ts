import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMetricFiltersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeMetricFiltersXAmzTargetEnum {
    Logs20140328DescribeMetricFilters = "Logs_20140328.DescribeMetricFilters"
}


export class DescribeMetricFiltersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMetricFiltersXAmzTargetEnum;
}


export class DescribeMetricFiltersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMetricFiltersQueryParams;

  @Metadata()
  headers: DescribeMetricFiltersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMetricFiltersRequest;
}


export class DescribeMetricFiltersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMetricFiltersResponse?: shared.DescribeMetricFiltersResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
