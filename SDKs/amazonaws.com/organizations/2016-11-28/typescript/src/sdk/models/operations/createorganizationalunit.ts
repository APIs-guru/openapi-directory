import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128CreateOrganizationalUnit = "AWSOrganizationsV20161128.CreateOrganizationalUnit"
}


export class CreateOrganizationalUnitHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateOrganizationalUnitXAmzTargetEnum;
}


export class CreateOrganizationalUnitRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOrganizationalUnitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOrganizationalUnitRequest;
}


export class CreateOrganizationalUnitResponse extends SpeakeasyBase {
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
  createOrganizationalUnitResponse?: shared.CreateOrganizationalUnitResponse;

  @Metadata()
  duplicateOrganizationalUnitException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  parentNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
