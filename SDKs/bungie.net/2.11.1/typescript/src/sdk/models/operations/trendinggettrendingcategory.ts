import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrendingGetTrendingCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageNumber" })
  pageNumber: number;
}


export class TrendingGetTrendingCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrendingGetTrendingCategoryPathParams;
}


export class TrendingGetTrendingCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
