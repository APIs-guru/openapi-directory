import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReviewDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class ReviewDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewDeletePathParams;
}


export class ReviewDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
