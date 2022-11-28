import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchProductsAsAdminQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum SearchProductsAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProductsAsAdmin = "AWS242ServiceCatalogService.SearchProductsAsAdmin"
}


export class SearchProductsAsAdminHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchProductsAsAdminXAmzTargetEnum;
}


export class SearchProductsAsAdminRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchProductsAsAdminQueryParams;

  @SpeakeasyMetadata()
  headers: SearchProductsAsAdminHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SearchProductsAsAdminInput;
}


export class SearchProductsAsAdminResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  searchProductsAsAdminOutput?: shared.SearchProductsAsAdminOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
