import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";

export enum OpportunitiesSortByEnum {
    CreatedAt = "created_at"
,    UpdatedAt = "updated_at"
,    Title = "title"
,    WinProbability = "win_probability"
,    MonetaryAmount = "monetary_amount"
,    Status = "status"
}


export class OpportunitiesSort extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=by" })
  by?: OpportunitiesSortByEnum;

  @Metadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
