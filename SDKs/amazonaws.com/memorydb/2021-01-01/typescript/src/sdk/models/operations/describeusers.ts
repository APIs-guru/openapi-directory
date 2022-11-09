import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeUsersXAmzTargetEnum {
    AmazonMemoryDbDescribeUsers = "AmazonMemoryDB.DescribeUsers"
}


export class DescribeUsersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeUsersXAmzTargetEnum;
}


export class DescribeUsersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeUsersRequest;
}


export class DescribeUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeUsersResponse?: shared.DescribeUsersResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  userNotFoundFault?: any;
}
