import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSearchContentByTagAndTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class ContentSearchContentByTagAndTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemsperpage" })
  itemsperpage?: number;
}


export class ContentSearchContentByTagAndTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSearchContentByTagAndTypePathParams;

  @Metadata()
  queryParams: ContentSearchContentByTagAndTypeQueryParams;
}


export class ContentSearchContentByTagAndTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
