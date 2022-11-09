import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSubscriptionFiltersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeSubscriptionFiltersXAmzTargetEnum {
    Logs20140328DescribeSubscriptionFilters = "Logs_20140328.DescribeSubscriptionFilters"
}


export class DescribeSubscriptionFiltersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSubscriptionFiltersXAmzTargetEnum;
}


export class DescribeSubscriptionFiltersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeSubscriptionFiltersQueryParams;

  @Metadata()
  headers: DescribeSubscriptionFiltersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSubscriptionFiltersRequest;
}


export class DescribeSubscriptionFiltersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSubscriptionFiltersResponse?: shared.DescribeSubscriptionFiltersResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
