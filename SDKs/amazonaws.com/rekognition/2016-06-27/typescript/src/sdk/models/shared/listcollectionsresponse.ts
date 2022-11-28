import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionIds" })
  collectionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=FaceModelVersions" })
  faceModelVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
