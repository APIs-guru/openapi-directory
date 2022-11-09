import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSessionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeSessionsXAmzTargetEnum {
    AmazonSsmDescribeSessions = "AmazonSSM.DescribeSessions"
}


export class DescribeSessionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSessionsXAmzTargetEnum;
}


export class DescribeSessionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeSessionsQueryParams;

  @Metadata()
  headers: DescribeSessionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSessionsRequest;
}


export class DescribeSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSessionsResponse?: shared.DescribeSessionsResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilterKey?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
