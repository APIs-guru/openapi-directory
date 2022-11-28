import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPaymentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentsIdPathParams;
}


export class GetPaymentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountLineItemEntity?: shared.AccountLineItemEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
