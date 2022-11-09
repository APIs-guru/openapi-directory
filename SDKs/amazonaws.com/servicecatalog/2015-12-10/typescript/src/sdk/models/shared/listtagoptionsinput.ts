import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListTagOptionsFilters } from "./listtagoptionsfilters";


export class ListTagOptionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters?: ListTagOptionsFilters;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;
}
