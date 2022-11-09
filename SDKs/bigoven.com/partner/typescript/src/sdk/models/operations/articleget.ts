import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ArticleGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uniqueKeyword" })
  uniqueKeyword: string;
}


export class ArticleGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArticleGetPathParams;
}


export class ArticleGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
