import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListConstraintsForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListConstraintsForPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceListConstraintsForPortfolio = "AWS242ServiceCatalogService.ListConstraintsForPortfolio"
}


export class ListConstraintsForPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListConstraintsForPortfolioXAmzTargetEnum;
}


export class ListConstraintsForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListConstraintsForPortfolioQueryParams;

  @Metadata()
  headers: ListConstraintsForPortfolioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListConstraintsForPortfolioInput;
}


export class ListConstraintsForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listConstraintsForPortfolioOutput?: shared.ListConstraintsForPortfolioOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
