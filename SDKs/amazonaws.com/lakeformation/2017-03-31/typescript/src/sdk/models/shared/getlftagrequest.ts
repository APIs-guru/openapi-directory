import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLfTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;
}
