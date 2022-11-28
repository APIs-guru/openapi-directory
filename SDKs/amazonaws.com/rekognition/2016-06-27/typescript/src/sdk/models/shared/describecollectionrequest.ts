import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;
}
