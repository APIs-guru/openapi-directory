import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateBudgetWithResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateBudgetWithResource = "AWS242ServiceCatalogService.AssociateBudgetWithResource"
}


export class AssociateBudgetWithResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateBudgetWithResourceXAmzTargetEnum;
}


export class AssociateBudgetWithResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateBudgetWithResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateBudgetWithResourceInput;
}


export class AssociateBudgetWithResourceResponse extends SpeakeasyBase {
  @Metadata()
  associateBudgetWithResourceOutput?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
