import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptPortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceAcceptPortfolioShare = "AWS242ServiceCatalogService.AcceptPortfolioShare"
}


export class AcceptPortfolioShareHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptPortfolioShareXAmzTargetEnum;
}


export class AcceptPortfolioShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptPortfolioShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptPortfolioShareInput;
}


export class AcceptPortfolioShareResponse extends SpeakeasyBase {
  @Metadata()
  acceptPortfolioShareOutput?: Map<string, any>;

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
