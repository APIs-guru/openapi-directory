import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrendingGetTrendingCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageNumber" })
  pageNumber: number;
}


export class TrendingGetTrendingCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrendingGetTrendingCategoryPathParams;
}


export class TrendingGetTrendingCategoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
