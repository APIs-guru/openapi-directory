import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLfTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;
}
