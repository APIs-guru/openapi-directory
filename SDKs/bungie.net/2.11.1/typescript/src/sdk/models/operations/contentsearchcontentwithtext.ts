import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSearchContentWithTextPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;
}


export class ContentSearchContentWithTextQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ctype" })
  ctype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchtext" })
  searchtext?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class ContentSearchContentWithTextRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSearchContentWithTextPathParams;

  @Metadata()
  queryParams: ContentSearchContentWithTextQueryParams;
}


export class ContentSearchContentWithTextResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
