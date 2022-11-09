import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeServicesXAmzTargetEnum {
    AwsPriceListServiceDescribeServices = "AWSPriceListService.DescribeServices"
}


export class DescribeServicesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeServicesXAmzTargetEnum;
}


export class DescribeServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeServicesQueryParams;

  @Metadata()
  headers: DescribeServicesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeServicesRequest;
}


export class DescribeServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServicesResponse?: shared.DescribeServicesResponse;

  @Metadata()
  expiredNextTokenException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
