import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListOrganizationPortfolioAccessQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListOrganizationPortfolioAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceListOrganizationPortfolioAccess = "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess"
}


export class ListOrganizationPortfolioAccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOrganizationPortfolioAccessXAmzTargetEnum;
}


export class ListOrganizationPortfolioAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOrganizationPortfolioAccessQueryParams;

  @SpeakeasyMetadata()
  headers: ListOrganizationPortfolioAccessHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListOrganizationPortfolioAccessInput;
}


export class ListOrganizationPortfolioAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  listOrganizationPortfolioAccessOutput?: shared.ListOrganizationPortfolioAccessOutput;

  @SpeakeasyMetadata()
  operationNotSupportedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
