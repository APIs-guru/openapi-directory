import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePortfolioSharesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum DescribePortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolioShares = "AWS242ServiceCatalogService.DescribePortfolioShares"
}


export class DescribePortfolioSharesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePortfolioSharesXAmzTargetEnum;
}


export class DescribePortfolioSharesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePortfolioSharesQueryParams;

  @Metadata()
  headers: DescribePortfolioSharesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePortfolioSharesInput;
}


export class DescribePortfolioSharesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePortfolioSharesOutput?: shared.DescribePortfolioSharesOutput;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
