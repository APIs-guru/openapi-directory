import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemsBatchBankTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetItemsBatchBankTransferQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetItemsBatchBankTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemsBatchBankTransferPathParams;

  @SpeakeasyMetadata()
  queryParams: GetItemsBatchBankTransferQueryParams;
}


export class GetItemsBatchBankTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onebatchesGetResponses200ContentApplication1jsonSchema?: shared.OnebatchesGetResponses200ContentApplication1jsonSchema;
}
