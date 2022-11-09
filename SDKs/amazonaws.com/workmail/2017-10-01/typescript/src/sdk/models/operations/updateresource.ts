import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateResourceXAmzTargetEnum {
    WorkMailServiceUpdateResource = "WorkMailService.UpdateResource"
}


export class UpdateResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateResourceXAmzTargetEnum;
}


export class UpdateResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateResourceRequest;
}


export class UpdateResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  emailAddressInUseException?: any;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidConfigurationException?: any;

  @Metadata()
  mailDomainNotFoundException?: any;

  @Metadata()
  mailDomainStateException?: any;

  @Metadata()
  nameAvailabilityException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateResourceResponse?: Map<string, any>;
}
