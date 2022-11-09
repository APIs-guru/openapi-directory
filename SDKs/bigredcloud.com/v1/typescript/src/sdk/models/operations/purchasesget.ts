import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PurchasesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultPurchaseQueryDto?: shared.PageResultPurchaseQueryDto;

  @Metadata()
  statusCode: number;
}
