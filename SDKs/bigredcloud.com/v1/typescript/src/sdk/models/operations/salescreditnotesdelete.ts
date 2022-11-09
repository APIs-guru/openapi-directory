import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SalesCreditNotesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesCreditNotesDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesCreditNotesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesCreditNotesDeletePathParams;

  @Metadata()
  queryParams: SalesCreditNotesDeleteQueryParams;
}


export class SalesCreditNotesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesCreditNotesDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
