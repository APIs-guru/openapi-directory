import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAvailableEmailTemplatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_after" })
  modifiedAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_before" })
  modifiedBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListAvailableEmailTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAvailableEmailTemplatesQueryParams;
}


export class ListAvailableEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
