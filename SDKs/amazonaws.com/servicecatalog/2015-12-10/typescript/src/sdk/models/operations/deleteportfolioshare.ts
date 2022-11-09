import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeletePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeletePortfolioShare = "AWS242ServiceCatalogService.DeletePortfolioShare"
}


export class DeletePortfolioShareHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeletePortfolioShareXAmzTargetEnum;
}


export class DeletePortfolioShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePortfolioShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeletePortfolioShareInput;
}


export class DeletePortfolioShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePortfolioShareOutput?: shared.DeletePortfolioShareOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
