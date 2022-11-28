import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateLfTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;

  @SpeakeasyMetadata({ data: "json, name=TagValuesToAdd" })
  tagValuesToAdd?: string[];

  @SpeakeasyMetadata({ data: "json, name=TagValuesToDelete" })
  tagValuesToDelete?: string[];
}
