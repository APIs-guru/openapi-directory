import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeInstanceAssociationsStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeInstanceAssociationsStatusXAmzTargetEnum {
    AmazonSsmDescribeInstanceAssociationsStatus = "AmazonSSM.DescribeInstanceAssociationsStatus"
}


export class DescribeInstanceAssociationsStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeInstanceAssociationsStatusXAmzTargetEnum;
}


export class DescribeInstanceAssociationsStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeInstanceAssociationsStatusQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeInstanceAssociationsStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeInstanceAssociationsStatusRequest;
}


export class DescribeInstanceAssociationsStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeInstanceAssociationsStatusResult?: shared.DescribeInstanceAssociationsStatusResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidInstanceId?: any;

  @SpeakeasyMetadata()
  invalidNextToken?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
