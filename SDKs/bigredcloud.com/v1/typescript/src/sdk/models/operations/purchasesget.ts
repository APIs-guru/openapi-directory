import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PurchasesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultPurchaseQueryDto?: shared.PageResultPurchaseQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
