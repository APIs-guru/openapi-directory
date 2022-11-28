import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionARN" })
  collectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=FaceCount" })
  faceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;
}
