import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListStackInstancesForProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceListStackInstancesForProvisionedProduct = "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct"
}


export class ListStackInstancesForProvisionedProductHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListStackInstancesForProvisionedProductXAmzTargetEnum;
}


export class ListStackInstancesForProvisionedProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListStackInstancesForProvisionedProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListStackInstancesForProvisionedProductInput;
}


export class ListStackInstancesForProvisionedProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listStackInstancesForProvisionedProductOutput?: shared.ListStackInstancesForProvisionedProductOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
