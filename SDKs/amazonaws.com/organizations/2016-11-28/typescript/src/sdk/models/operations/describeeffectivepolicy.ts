import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEffectivePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeEffectivePolicy = "AWSOrganizationsV20161128.DescribeEffectivePolicy"
}


export class DescribeEffectivePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEffectivePolicyXAmzTargetEnum;
}


export class DescribeEffectivePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEffectivePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEffectivePolicyRequest;
}


export class DescribeEffectivePolicyResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeEffectivePolicyResponse?: shared.DescribeEffectivePolicyResponse;

  @Metadata()
  effectivePolicyNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  targetNotFoundException?: any;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;
}
