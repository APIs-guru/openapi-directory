import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortDirectionEnum } from "./sortdirectionenum";

export enum CompaniesSortByEnum {
    CreatedAt = "created_at"
,    UpdatedAt = "updated_at"
,    Name = "name"
}


export class CompaniesSort extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=by" })
  by?: CompaniesSortByEnum;

  @Metadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
