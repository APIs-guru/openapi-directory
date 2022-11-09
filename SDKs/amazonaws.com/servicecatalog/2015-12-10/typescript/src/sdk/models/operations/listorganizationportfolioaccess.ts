import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOrganizationPortfolioAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListOrganizationPortfolioAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceListOrganizationPortfolioAccess = "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess"
}


export class ListOrganizationPortfolioAccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOrganizationPortfolioAccessXAmzTargetEnum;
}


export class ListOrganizationPortfolioAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListOrganizationPortfolioAccessQueryParams;

  @Metadata()
  headers: ListOrganizationPortfolioAccessHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOrganizationPortfolioAccessInput;
}


export class ListOrganizationPortfolioAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  listOrganizationPortfolioAccessOutput?: shared.ListOrganizationPortfolioAccessOutput;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
