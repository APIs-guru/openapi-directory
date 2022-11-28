import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagKeysInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
