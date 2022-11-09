import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetInvoicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoicesIdPathParams;
}


export class GetInvoicesIdResponse extends SpeakeasyBase {
  @Metadata()
  accountLineItemEntity?: shared.AccountLineItemEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
