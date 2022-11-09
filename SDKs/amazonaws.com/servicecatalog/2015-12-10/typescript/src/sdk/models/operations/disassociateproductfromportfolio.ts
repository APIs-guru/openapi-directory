import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateProductFromPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateProductFromPortfolio = "AWS242ServiceCatalogService.DisassociateProductFromPortfolio"
}


export class DisassociateProductFromPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateProductFromPortfolioXAmzTargetEnum;
}


export class DisassociateProductFromPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateProductFromPortfolioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateProductFromPortfolioInput;
}


export class DisassociateProductFromPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateProductFromPortfolioOutput?: Map<string, any>;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
