import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
export declare enum OpportunitiesSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Title = "title",
    WinProbability = "win_probability",
    MonetaryAmount = "monetary_amount",
    Status = "status"
}
export declare class OpportunitiesSort extends SpeakeasyBase {
    by?: OpportunitiesSortByEnum;
    direction?: SortDirectionEnum;
}
