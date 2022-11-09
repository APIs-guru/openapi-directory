import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProvisionedProductPlan = "AWS242ServiceCatalogService.DeleteProvisionedProductPlan"
}


export class DeleteProvisionedProductPlanHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteProvisionedProductPlanXAmzTargetEnum;
}


export class DeleteProvisionedProductPlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteProvisionedProductPlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteProvisionedProductPlanInput;
}


export class DeleteProvisionedProductPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProvisionedProductPlanOutput?: Map<string, any>;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
