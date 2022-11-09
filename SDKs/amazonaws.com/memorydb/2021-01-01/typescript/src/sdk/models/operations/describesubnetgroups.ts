import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeSubnetGroupsXAmzTargetEnum {
    AmazonMemoryDbDescribeSubnetGroups = "AmazonMemoryDB.DescribeSubnetGroups"
}


export class DescribeSubnetGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSubnetGroupsXAmzTargetEnum;
}


export class DescribeSubnetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSubnetGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSubnetGroupsRequest;
}


export class DescribeSubnetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSubnetGroupsResponse?: shared.DescribeSubnetGroupsResponse;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetGroupNotFoundFault?: any;
}
