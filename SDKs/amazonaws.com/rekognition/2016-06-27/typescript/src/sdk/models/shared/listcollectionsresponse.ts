import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListCollectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionIds" })
  collectionIds?: string[];

  @Metadata({ data: "json, name=FaceModelVersions" })
  faceModelVersions?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
