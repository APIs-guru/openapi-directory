import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvoicesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetInvoicesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoicesIdPathParams;
}


export class GetInvoicesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountLineItemEntity?: shared.AccountLineItemEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
