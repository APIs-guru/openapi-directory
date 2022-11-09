import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128UpdateOrganizationalUnit = "AWSOrganizationsV20161128.UpdateOrganizationalUnit"
}


export class UpdateOrganizationalUnitHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateOrganizationalUnitXAmzTargetEnum;
}


export class UpdateOrganizationalUnitRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateOrganizationalUnitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOrganizationalUnitRequest;
}


export class UpdateOrganizationalUnitResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateOrganizationalUnitException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  organizationalUnitNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateOrganizationalUnitResponse?: shared.UpdateOrganizationalUnitResponse;
}
