import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisioningArtifact = "AWS242ServiceCatalogService.UpdateProvisioningArtifact"
}


export class UpdateProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateProvisioningArtifactXAmzTargetEnum;
}


export class UpdateProvisioningArtifactRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateProvisioningArtifactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateProvisioningArtifactInput;
}


export class UpdateProvisioningArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateProvisioningArtifactOutput?: shared.UpdateProvisioningArtifactOutput;
}
