import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagValuesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
