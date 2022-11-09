import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAccountXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeAccount = "AWSOrganizationsV20161128.DescribeAccount"
}


export class DescribeAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAccountXAmzTargetEnum;
}


export class DescribeAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAccountRequest;
}


export class DescribeAccountResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAccountResponse?: shared.DescribeAccountResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
