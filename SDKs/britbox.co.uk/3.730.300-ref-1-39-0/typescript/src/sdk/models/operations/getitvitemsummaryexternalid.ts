import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItvItemsummaryExternalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalId" })
  externalId: string;
}


export class GetItvItemsummaryExternalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItvItemsummaryExternalIdPathParams;
}


export class GetItvItemsummaryExternalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getItvItemsummaryExternalId302ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
