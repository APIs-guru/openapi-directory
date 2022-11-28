import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSearchContentByTagAndTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class ContentSearchContentByTagAndTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsperpage" })
  itemsperpage?: number;
}


export class ContentSearchContentByTagAndTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSearchContentByTagAndTypePathParams;

  @SpeakeasyMetadata()
  queryParams: ContentSearchContentByTagAndTypeQueryParams;
}


export class ContentSearchContentByTagAndTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
