import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemsBatchInternalTrasnferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetItemsBatchInternalTrasnferQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetItemsBatchInternalTrasnferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemsBatchInternalTrasnferPathParams;

  @Metadata()
  queryParams: GetItemsBatchInternalTrasnferQueryParams;
}


export class GetItemsBatchInternalTrasnferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onebatchesGetResponses200ContentApplication1jsonSchema?: shared.OnebatchesGetResponses200ContentApplication1jsonSchema;
}
