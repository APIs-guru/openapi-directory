import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact"
}


export class AssociateServiceActionWithProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}


export class AssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateServiceActionWithProvisioningArtifactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateServiceActionWithProvisioningArtifactInput;
}


export class AssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
  @Metadata()
  associateServiceActionWithProvisioningArtifactOutput?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
