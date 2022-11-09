import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagKeysInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
