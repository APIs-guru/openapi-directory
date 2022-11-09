import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItvItemsummaryExternalIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalId" })
  externalId: string;
}


export class GetItvItemsummaryExternalIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItvItemsummaryExternalIdPathParams;
}


export class GetItvItemsummaryExternalIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getItvItemsummaryExternalId302ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
