import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128UpdatePolicy = "AWSOrganizationsV20161128.UpdatePolicy"
}


export class UpdatePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePolicyXAmzTargetEnum;
}


export class UpdatePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePolicyRequest;
}


export class UpdatePolicyResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicatePolicyException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  malformedPolicyDocumentException?: any;

  @Metadata()
  policyChangesInProgressException?: any;

  @Metadata()
  policyNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;

  @Metadata()
  updatePolicyResponse?: shared.UpdatePolicyResponse;
}
