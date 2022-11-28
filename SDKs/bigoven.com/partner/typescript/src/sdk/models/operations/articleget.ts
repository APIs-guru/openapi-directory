import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uniqueKeyword" })
  uniqueKeyword: string;
}


export class ArticleGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleGetPathParams;
}


export class ArticleGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
