import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"
}


export class BatchAssociateServiceActionWithProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}


export class BatchAssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchAssociateServiceActionWithProvisioningArtifactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchAssociateServiceActionWithProvisioningArtifactInput;
}


export class BatchAssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
  @Metadata()
  batchAssociateServiceActionWithProvisioningArtifactOutput?: shared.BatchAssociateServiceActionWithProvisioningArtifactOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  statusCode: number;
}
