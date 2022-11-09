import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAddressesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeAddresses = "AWSIESnowballJobManagementService.DescribeAddresses"
}


export class DescribeAddressesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAddressesXAmzTargetEnum;
}


export class DescribeAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeAddressesQueryParams;

  @Metadata()
  headers: DescribeAddressesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAddressesRequest;
}


export class DescribeAddressesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAddressesResult?: shared.DescribeAddressesResult;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;
}
