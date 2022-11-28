import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SalesCreditNotesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesCreditNotesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesCreditNotesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesCreditNotesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SalesCreditNotesDeleteQueryParams;
}


export class SalesCreditNotesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesCreditNotesDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
