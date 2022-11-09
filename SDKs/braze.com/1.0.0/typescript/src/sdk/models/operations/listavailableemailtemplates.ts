import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAvailableEmailTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_after" })
  modifiedAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modified_before" })
  modifiedBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListAvailableEmailTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAvailableEmailTemplatesQueryParams;
}


export class ListAvailableEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
