import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPortfoliosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}

export enum ListPortfoliosXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfolios = "AWS242ServiceCatalogService.ListPortfolios"
}


export class ListPortfoliosHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPortfoliosXAmzTargetEnum;
}


export class ListPortfoliosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPortfoliosQueryParams;

  @SpeakeasyMetadata()
  headers: ListPortfoliosHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListPortfoliosInput;
}


export class ListPortfoliosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParametersException?: any;

  @SpeakeasyMetadata()
  listPortfoliosOutput?: shared.ListPortfoliosOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
