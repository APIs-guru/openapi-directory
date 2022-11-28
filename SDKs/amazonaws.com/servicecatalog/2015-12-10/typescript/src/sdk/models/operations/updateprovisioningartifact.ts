import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisioningArtifact = "AWS242ServiceCatalogService.UpdateProvisioningArtifact"
}


export class UpdateProvisioningArtifactHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateProvisioningArtifactXAmzTargetEnum;
}


export class UpdateProvisioningArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateProvisioningArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateProvisioningArtifactInput;
}


export class UpdateProvisioningArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateProvisioningArtifactOutput?: shared.UpdateProvisioningArtifactOutput;
}
