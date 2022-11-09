import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCollectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;
}
