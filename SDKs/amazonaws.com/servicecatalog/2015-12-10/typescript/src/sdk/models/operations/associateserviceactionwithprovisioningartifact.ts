import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact"
}


export class AssociateServiceActionWithProvisioningArtifactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}


export class AssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateServiceActionWithProvisioningArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssociateServiceActionWithProvisioningArtifactInput;
}


export class AssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateServiceActionWithProvisioningArtifactOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  duplicateResourceException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
