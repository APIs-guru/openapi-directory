import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagValuesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=TagValues" })
  tagValues?: string[];
}
