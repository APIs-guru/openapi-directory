import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionARN" })
  collectionArn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=FaceCount" })
  faceCount?: number;

  @Metadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;
}
