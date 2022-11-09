import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeInstanceInformationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeInstanceInformationXAmzTargetEnum {
    AmazonSsmDescribeInstanceInformation = "AmazonSSM.DescribeInstanceInformation"
}


export class DescribeInstanceInformationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeInstanceInformationXAmzTargetEnum;
}


export class DescribeInstanceInformationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeInstanceInformationQueryParams;

  @Metadata()
  headers: DescribeInstanceInformationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeInstanceInformationRequest;
}


export class DescribeInstanceInformationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeInstanceInformationResult?: shared.DescribeInstanceInformationResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilterKey?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidInstanceInformationFilterValue?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
