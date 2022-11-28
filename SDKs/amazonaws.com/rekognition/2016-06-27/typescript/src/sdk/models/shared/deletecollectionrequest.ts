import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;
}
