import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact = "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
}


export class BatchDisassociateServiceActionFromProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
}


export class BatchDisassociateServiceActionFromProvisioningArtifactRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDisassociateServiceActionFromProvisioningArtifactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDisassociateServiceActionFromProvisioningArtifactInput;
}


export class BatchDisassociateServiceActionFromProvisioningArtifactResponse extends SpeakeasyBase {
  @Metadata()
  batchDisassociateServiceActionFromProvisioningArtifactOutput?: shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  statusCode: number;
}
