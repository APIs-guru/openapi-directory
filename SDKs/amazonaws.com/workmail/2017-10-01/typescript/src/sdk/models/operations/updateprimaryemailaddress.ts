import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePrimaryEmailAddressXAmzTargetEnum {
    WorkMailServiceUpdatePrimaryEmailAddress = "WorkMailService.UpdatePrimaryEmailAddress"
}


export class UpdatePrimaryEmailAddressHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePrimaryEmailAddressXAmzTargetEnum;
}


export class UpdatePrimaryEmailAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePrimaryEmailAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePrimaryEmailAddressRequest;
}


export class UpdatePrimaryEmailAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryServiceAuthenticationFailedException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  emailAddressInUseException?: any;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  mailDomainNotFoundException?: any;

  @Metadata()
  mailDomainStateException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;

  @Metadata()
  updatePrimaryEmailAddressResponse?: Map<string, any>;
}
