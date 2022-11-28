import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagKeysOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys?: string[];
}
