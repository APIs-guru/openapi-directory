import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";

export enum InvoicesSortByEnum {
    UpdatedAt = "updated_at"
}


export class InvoicesSort extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=by" })
  by?: InvoicesSortByEnum;

  @Metadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
