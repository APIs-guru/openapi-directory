import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagKeysOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys?: string[];
}
