import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCollectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
