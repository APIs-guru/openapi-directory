import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPrincipalsForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListPrincipalsForPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPrincipalsForPortfolio = "AWS242ServiceCatalogService.ListPrincipalsForPortfolio"
}


export class ListPrincipalsForPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPrincipalsForPortfolioXAmzTargetEnum;
}


export class ListPrincipalsForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPrincipalsForPortfolioQueryParams;

  @SpeakeasyMetadata()
  headers: ListPrincipalsForPortfolioHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListPrincipalsForPortfolioInput;
}


export class ListPrincipalsForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  listPrincipalsForPortfolioOutput?: shared.ListPrincipalsForPortfolioOutput;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
