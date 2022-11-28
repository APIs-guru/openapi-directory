import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAddressesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeAddresses = "AWSIESnowballJobManagementService.DescribeAddresses"
}


export class DescribeAddressesHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeAddressesXAmzTargetEnum;
}


export class DescribeAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeAddressesQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeAddressesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAddressesRequest;
}


export class DescribeAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeAddressesResult?: shared.DescribeAddressesResult;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidResourceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
