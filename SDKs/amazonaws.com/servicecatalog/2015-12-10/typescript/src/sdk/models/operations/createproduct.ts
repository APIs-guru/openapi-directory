import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProduct = "AWS242ServiceCatalogService.CreateProduct"
}


export class CreateProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateProductXAmzTargetEnum;
}


export class CreateProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateProductInput;
}


export class CreateProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createProductOutput?: shared.CreateProductOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagOptionNotMigratedException?: any;
}
