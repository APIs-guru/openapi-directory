import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeInstanceAssociationsStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeInstanceAssociationsStatusXAmzTargetEnum {
    AmazonSsmDescribeInstanceAssociationsStatus = "AmazonSSM.DescribeInstanceAssociationsStatus"
}


export class DescribeInstanceAssociationsStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeInstanceAssociationsStatusXAmzTargetEnum;
}


export class DescribeInstanceAssociationsStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeInstanceAssociationsStatusQueryParams;

  @Metadata()
  headers: DescribeInstanceAssociationsStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeInstanceAssociationsStatusRequest;
}


export class DescribeInstanceAssociationsStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeInstanceAssociationsStatusResult?: shared.DescribeInstanceAssociationsStatusResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
