import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchProductsAsAdminQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum SearchProductsAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProductsAsAdmin = "AWS242ServiceCatalogService.SearchProductsAsAdmin"
}


export class SearchProductsAsAdminHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchProductsAsAdminXAmzTargetEnum;
}


export class SearchProductsAsAdminRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchProductsAsAdminQueryParams;

  @Metadata()
  headers: SearchProductsAsAdminHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchProductsAsAdminInput;
}


export class SearchProductsAsAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  searchProductsAsAdminOutput?: shared.SearchProductsAsAdminOutput;

  @Metadata()
  statusCode: number;
}
