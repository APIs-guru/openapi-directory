import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionArn" })
  collectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
