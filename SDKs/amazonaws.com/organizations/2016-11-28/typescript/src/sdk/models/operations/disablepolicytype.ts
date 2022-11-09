import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisablePolicyTypeXAmzTargetEnum {
    AwsOrganizationsV20161128DisablePolicyType = "AWSOrganizationsV20161128.DisablePolicyType"
}


export class DisablePolicyTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisablePolicyTypeXAmzTargetEnum;
}


export class DisablePolicyTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisablePolicyTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisablePolicyTypeRequest;
}


export class DisablePolicyTypeResponse extends SpeakeasyBase {
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
  disablePolicyTypeResponse?: shared.DisablePolicyTypeResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  policyChangesInProgressException?: any;

  @Metadata()
  policyTypeNotEnabledException?: any;

  @Metadata()
  rootNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;
}
