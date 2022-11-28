import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ScanProvisionedProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceScanProvisionedProducts = "AWS242ServiceCatalogService.ScanProvisionedProducts"
}


export class ScanProvisionedProductsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ScanProvisionedProductsXAmzTargetEnum;
}


export class ScanProvisionedProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ScanProvisionedProductsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScanProvisionedProductsInput;
}


export class ScanProvisionedProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  scanProvisionedProductsOutput?: shared.ScanProvisionedProductsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
