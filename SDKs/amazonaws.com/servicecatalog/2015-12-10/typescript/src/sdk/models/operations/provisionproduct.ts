import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ProvisionProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceProvisionProduct = "AWS242ServiceCatalogService.ProvisionProduct"
}


export class ProvisionProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: ProvisionProductXAmzTargetEnum;
}


export class ProvisionProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: ProvisionProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProvisionProductInput;
}


export class ProvisionProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  provisionProductOutput?: shared.ProvisionProductOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
