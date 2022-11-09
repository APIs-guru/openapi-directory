import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPaymentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentsIdPathParams;
}


export class GetPaymentsIdResponse extends SpeakeasyBase {
  @Metadata()
  accountLineItemEntity?: shared.AccountLineItemEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
