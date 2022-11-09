import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagValuesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
