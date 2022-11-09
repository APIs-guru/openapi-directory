import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
export declare enum CompaniesSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name"
}
export declare class CompaniesSort extends SpeakeasyBase {
    by?: CompaniesSortByEnum;
    direction?: SortDirectionEnum;
}
