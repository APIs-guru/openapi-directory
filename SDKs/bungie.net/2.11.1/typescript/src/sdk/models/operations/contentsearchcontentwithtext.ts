import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSearchContentWithTextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;
}


export class ContentSearchContentWithTextQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ctype" })
  ctype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchtext" })
  searchtext?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class ContentSearchContentWithTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSearchContentWithTextPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentSearchContentWithTextQueryParams;
}


export class ContentSearchContentWithTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
