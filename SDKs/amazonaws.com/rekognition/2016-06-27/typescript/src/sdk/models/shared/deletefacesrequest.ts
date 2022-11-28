import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=FaceIds" })
  faceIds: string[];
}
