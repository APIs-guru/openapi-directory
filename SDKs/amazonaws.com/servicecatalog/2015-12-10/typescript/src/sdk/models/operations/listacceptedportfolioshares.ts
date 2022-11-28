import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAcceptedPortfolioSharesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListAcceptedPortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceListAcceptedPortfolioShares = "AWS242ServiceCatalogService.ListAcceptedPortfolioShares"
}


export class ListAcceptedPortfolioSharesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListAcceptedPortfolioSharesXAmzTargetEnum;
}


export class ListAcceptedPortfolioSharesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAcceptedPortfolioSharesQueryParams;

  @SpeakeasyMetadata()
  headers: ListAcceptedPortfolioSharesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListAcceptedPortfolioSharesInput;
}


export class ListAcceptedPortfolioSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  listAcceptedPortfolioSharesOutput?: shared.ListAcceptedPortfolioSharesOutput;

  @SpeakeasyMetadata()
  operationNotSupportedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
