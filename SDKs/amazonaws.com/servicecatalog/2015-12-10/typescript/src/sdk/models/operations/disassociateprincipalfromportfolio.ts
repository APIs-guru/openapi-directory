import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociatePrincipalFromPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociatePrincipalFromPortfolio = "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio"
}


export class DisassociatePrincipalFromPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociatePrincipalFromPortfolioXAmzTargetEnum;
}


export class DisassociatePrincipalFromPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociatePrincipalFromPortfolioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociatePrincipalFromPortfolioInput;
}


export class DisassociatePrincipalFromPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociatePrincipalFromPortfolioOutput?: Map<string, any>;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
