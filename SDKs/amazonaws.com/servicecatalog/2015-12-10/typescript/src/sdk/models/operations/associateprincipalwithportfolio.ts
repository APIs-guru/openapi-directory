import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociatePrincipalWithPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociatePrincipalWithPortfolio = "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio"
}


export class AssociatePrincipalWithPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociatePrincipalWithPortfolioXAmzTargetEnum;
}


export class AssociatePrincipalWithPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociatePrincipalWithPortfolioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociatePrincipalWithPortfolioInput;
}


export class AssociatePrincipalWithPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  associatePrincipalWithPortfolioOutput?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
