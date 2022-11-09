import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSearchHelpArticlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchtext" })
  searchtext: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=size" })
  size: string;
}


export class ContentSearchHelpArticlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSearchHelpArticlesPathParams;
}


export class ContentSearchHelpArticlesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
