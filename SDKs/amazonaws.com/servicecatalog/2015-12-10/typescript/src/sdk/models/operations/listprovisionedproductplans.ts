import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListProvisionedProductPlansXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisionedProductPlans = "AWS242ServiceCatalogService.ListProvisionedProductPlans"
}


export class ListProvisionedProductPlansHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListProvisionedProductPlansXAmzTargetEnum;
}


export class ListProvisionedProductPlansRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListProvisionedProductPlansHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListProvisionedProductPlansInput;
}


export class ListProvisionedProductPlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listProvisionedProductPlansOutput?: shared.ListProvisionedProductPlansOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
