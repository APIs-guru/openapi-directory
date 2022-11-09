import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLfTagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=TagKey" })
  tagKey: string;

  @Metadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
