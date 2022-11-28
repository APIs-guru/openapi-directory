import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAvailableContentBlocksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_after" })
  modifiedAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_before" })
  modifiedBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListAvailableContentBlocksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAvailableContentBlocksQueryParams;
}


export class ListAvailableContentBlocksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
