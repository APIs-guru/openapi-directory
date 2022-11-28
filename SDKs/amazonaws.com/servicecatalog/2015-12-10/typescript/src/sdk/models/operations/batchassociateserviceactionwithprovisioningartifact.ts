import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"
}


export class BatchAssociateServiceActionWithProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}


export class BatchAssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchAssociateServiceActionWithProvisioningArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchAssociateServiceActionWithProvisioningArtifactInput;
}


export class BatchAssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchAssociateServiceActionWithProvisioningArtifactOutput?: shared.BatchAssociateServiceActionWithProvisioningArtifactOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
