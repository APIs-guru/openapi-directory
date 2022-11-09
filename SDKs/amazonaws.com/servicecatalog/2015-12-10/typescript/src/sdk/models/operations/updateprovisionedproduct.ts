import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisionedProduct = "AWS242ServiceCatalogService.UpdateProvisionedProduct"
}


export class UpdateProvisionedProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateProvisionedProductXAmzTargetEnum;
}


export class UpdateProvisionedProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateProvisionedProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateProvisionedProductInput;
}


export class UpdateProvisionedProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateProvisionedProductOutput?: shared.UpdateProvisionedProductOutput;
}
