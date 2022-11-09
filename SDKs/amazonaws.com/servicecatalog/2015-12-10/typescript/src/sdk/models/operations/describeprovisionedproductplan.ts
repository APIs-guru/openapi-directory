import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisionedProductPlan = "AWS242ServiceCatalogService.DescribeProvisionedProductPlan"
}


export class DescribeProvisionedProductPlanHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProvisionedProductPlanXAmzTargetEnum;
}


export class DescribeProvisionedProductPlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProvisionedProductPlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProvisionedProductPlanInput;
}


export class DescribeProvisionedProductPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProvisionedProductPlanOutput?: shared.DescribeProvisionedProductPlanOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
