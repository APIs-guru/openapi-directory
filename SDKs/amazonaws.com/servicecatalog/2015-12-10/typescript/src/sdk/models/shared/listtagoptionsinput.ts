import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListTagOptionsFilters } from "./listtagoptionsfilters";



export class ListTagOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ListTagOptionsFilters;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;
}
