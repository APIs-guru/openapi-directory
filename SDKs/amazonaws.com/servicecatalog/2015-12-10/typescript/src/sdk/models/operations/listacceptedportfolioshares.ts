import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAcceptedPortfolioSharesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListAcceptedPortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceListAcceptedPortfolioShares = "AWS242ServiceCatalogService.ListAcceptedPortfolioShares"
}


export class ListAcceptedPortfolioSharesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAcceptedPortfolioSharesXAmzTargetEnum;
}


export class ListAcceptedPortfolioSharesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAcceptedPortfolioSharesQueryParams;

  @Metadata()
  headers: ListAcceptedPortfolioSharesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAcceptedPortfolioSharesInput;
}


export class ListAcceptedPortfolioSharesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listAcceptedPortfolioSharesOutput?: shared.ListAcceptedPortfolioSharesOutput;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  statusCode: number;
}
