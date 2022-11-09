import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeAssociationExecutionTargetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAssociationExecutionTargetsXAmzTargetEnum {
    AmazonSsmDescribeAssociationExecutionTargets = "AmazonSSM.DescribeAssociationExecutionTargets"
}


export class DescribeAssociationExecutionTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAssociationExecutionTargetsXAmzTargetEnum;
}


export class DescribeAssociationExecutionTargetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeAssociationExecutionTargetsQueryParams;

  @Metadata()
  headers: DescribeAssociationExecutionTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAssociationExecutionTargetsRequest;
}


export class DescribeAssociationExecutionTargetsResponse extends SpeakeasyBase {
  @Metadata()
  associationDoesNotExist?: any;

  @Metadata()
  associationExecutionDoesNotExist?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAssociationExecutionTargetsResult?: shared.DescribeAssociationExecutionTargetsResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
