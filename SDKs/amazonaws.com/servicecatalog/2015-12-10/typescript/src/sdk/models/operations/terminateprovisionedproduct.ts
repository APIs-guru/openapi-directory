import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TerminateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceTerminateProvisionedProduct = "AWS242ServiceCatalogService.TerminateProvisionedProduct"
}


export class TerminateProvisionedProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: TerminateProvisionedProductXAmzTargetEnum;
}


export class TerminateProvisionedProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TerminateProvisionedProductHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TerminateProvisionedProductInput;
}


export class TerminateProvisionedProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  terminateProvisionedProductOutput?: shared.TerminateProvisionedProductOutput;
}
