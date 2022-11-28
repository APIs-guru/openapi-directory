import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReviewDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class ReviewDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewDeletePathParams;
}


export class ReviewDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
