import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateOrganizationXAmzTargetEnum {
    WorkMailServiceCreateOrganization = "WorkMailService.CreateOrganization"
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
  contentType: string;

  @Metadata()
  createOrganizationResponse?: shared.CreateOrganizationResponse;

  @Metadata()
  directoryInUseException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  nameAvailabilityException?: any;

  @Metadata()
  statusCode: number;
}
