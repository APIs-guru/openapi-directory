import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCollectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;
}
