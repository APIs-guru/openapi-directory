import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchProductsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum SearchProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProducts = "AWS242ServiceCatalogService.SearchProducts"
}


export class SearchProductsHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchProductsXAmzTargetEnum;
}


export class SearchProductsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchProductsQueryParams;

  @Metadata()
  headers: SearchProductsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchProductsInput;
}


export class SearchProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  searchProductsOutput?: shared.SearchProductsOutput;

  @Metadata()
  statusCode: number;
}
