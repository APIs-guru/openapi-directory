import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";


export enum CompaniesSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name"
}


export class CompaniesSort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=by" })
  by?: CompaniesSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=direction" })
  direction?: SortDirectionEnum;
}
