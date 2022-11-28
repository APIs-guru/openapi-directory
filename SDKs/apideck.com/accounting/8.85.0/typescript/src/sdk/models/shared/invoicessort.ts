import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";


export enum InvoicesSortByEnum {
    UpdatedAt = "updated_at"
}


export class InvoicesSort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=by" })
  by?: InvoicesSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
