import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLfTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=TagValues" })
  tagValues?: string[];
}
