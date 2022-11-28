import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
