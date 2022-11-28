import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CashReceiptQueryDto } from "./cashreceiptquerydto";



export class PageResultCashReceiptQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: CashReceiptQueryDto })
  items?: CashReceiptQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
