import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RejectPortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceRejectPortfolioShare = "AWS242ServiceCatalogService.RejectPortfolioShare"
}


export class RejectPortfolioShareHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectPortfolioShareXAmzTargetEnum;
}


export class RejectPortfolioShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: RejectPortfolioShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RejectPortfolioShareInput;
}


export class RejectPortfolioShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rejectPortfolioShareOutput?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
