import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionArn" })
  collectionArn?: string;

  @Metadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
