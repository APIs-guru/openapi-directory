import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeAssociationExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAssociationExecutionsXAmzTargetEnum {
    AmazonSsmDescribeAssociationExecutions = "AmazonSSM.DescribeAssociationExecutions"
}


export class DescribeAssociationExecutionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAssociationExecutionsXAmzTargetEnum;
}


export class DescribeAssociationExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeAssociationExecutionsQueryParams;

  @Metadata()
  headers: DescribeAssociationExecutionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAssociationExecutionsRequest;
}


export class DescribeAssociationExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  associationDoesNotExist?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAssociationExecutionsResult?: shared.DescribeAssociationExecutionsResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
