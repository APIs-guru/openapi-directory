import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportAsProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceImportAsProvisionedProduct = "AWS242ServiceCatalogService.ImportAsProvisionedProduct"
}


export class ImportAsProvisionedProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: ImportAsProvisionedProductXAmzTargetEnum;
}


export class ImportAsProvisionedProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportAsProvisionedProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportAsProvisionedProductInput;
}


export class ImportAsProvisionedProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  importAsProvisionedProductOutput?: shared.ImportAsProvisionedProductOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
