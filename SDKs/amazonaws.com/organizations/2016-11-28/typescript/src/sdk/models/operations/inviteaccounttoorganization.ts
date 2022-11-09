import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum InviteAccountToOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128InviteAccountToOrganization = "AWSOrganizationsV20161128.InviteAccountToOrganization"
}


export class InviteAccountToOrganizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: InviteAccountToOrganizationXAmzTargetEnum;
}


export class InviteAccountToOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: InviteAccountToOrganizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InviteAccountToOrganizationRequest;
}


export class InviteAccountToOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountOwnerNotVerifiedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateHandshakeException?: any;

  @Metadata()
  finalizingOrganizationException?: any;

  @Metadata()
  handshakeConstraintViolationException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  inviteAccountToOrganizationResponse?: shared.InviteAccountToOrganizationResponse;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
