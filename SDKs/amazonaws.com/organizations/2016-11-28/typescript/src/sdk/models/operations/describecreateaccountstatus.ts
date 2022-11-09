import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCreateAccountStatusXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeCreateAccountStatus = "AWSOrganizationsV20161128.DescribeCreateAccountStatus"
}


export class DescribeCreateAccountStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCreateAccountStatusXAmzTargetEnum;
}


export class DescribeCreateAccountStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCreateAccountStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCreateAccountStatusRequest;
}


export class DescribeCreateAccountStatusResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAccountStatusNotFoundException?: any;

  @Metadata()
  describeCreateAccountStatusResponse?: shared.DescribeCreateAccountStatusResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;
}
