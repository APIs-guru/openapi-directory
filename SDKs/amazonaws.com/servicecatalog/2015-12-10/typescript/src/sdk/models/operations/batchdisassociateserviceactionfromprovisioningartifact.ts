import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact = "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
}


export class BatchDisassociateServiceActionFromProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
}


export class BatchDisassociateServiceActionFromProvisioningArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchDisassociateServiceActionFromProvisioningArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchDisassociateServiceActionFromProvisioningArtifactInput;
}


export class BatchDisassociateServiceActionFromProvisioningArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchDisassociateServiceActionFromProvisioningArtifactOutput?: shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
