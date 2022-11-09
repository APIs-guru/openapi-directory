import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128CreateOrganization = "AWSOrganizationsV20161128.CreateOrganization"
}


export class CreateOrganizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateOrganizationXAmzTargetEnum;
}


export class CreateOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOrganizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOrganizationRequest;
}


export class CreateOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accessDeniedForDependencyException?: any;

  @Metadata()
  alreadyInOrganizationException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createOrganizationResponse?: shared.CreateOrganizationResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
