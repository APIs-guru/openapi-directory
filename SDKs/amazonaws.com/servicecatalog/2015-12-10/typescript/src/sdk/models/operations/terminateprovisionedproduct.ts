import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TerminateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceTerminateProvisionedProduct = "AWS242ServiceCatalogService.TerminateProvisionedProduct"
}


export class TerminateProvisionedProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: TerminateProvisionedProductXAmzTargetEnum;
}


export class TerminateProvisionedProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: TerminateProvisionedProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TerminateProvisionedProductInput;
}


export class TerminateProvisionedProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminateProvisionedProductOutput?: shared.TerminateProvisionedProductOutput;
}
