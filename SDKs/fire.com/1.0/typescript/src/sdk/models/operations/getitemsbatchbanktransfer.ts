import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemsBatchBankTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetItemsBatchBankTransferQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetItemsBatchBankTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemsBatchBankTransferPathParams;

  @Metadata()
  queryParams: GetItemsBatchBankTransferQueryParams;
}


export class GetItemsBatchBankTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onebatchesGetResponses200ContentApplication1jsonSchema?: shared.OnebatchesGetResponses200ContentApplication1jsonSchema;
}
