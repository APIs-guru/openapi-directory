import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterDelegatedAdministratorXAmzTargetEnum {
    AwsOrganizationsV20161128DeregisterDelegatedAdministrator = "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator"
}


export class DeregisterDelegatedAdministratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterDelegatedAdministratorXAmzTargetEnum;
}


export class DeregisterDelegatedAdministratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterDelegatedAdministratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterDelegatedAdministratorRequest;
}


export class DeregisterDelegatedAdministratorResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountNotFoundException?: any;

  @Metadata()
  accountNotRegisteredException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

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
