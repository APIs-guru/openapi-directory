import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagValuesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TagValues" })
  tagValues?: string[];
}
