import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSearchHelpArticlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchtext" })
  searchtext: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=size" })
  size: string;
}


export class ContentSearchHelpArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSearchHelpArticlesPathParams;
}


export class ContentSearchHelpArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
