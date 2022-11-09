import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @Metadata({ data: "json, name=FaceIds" })
  faceIds: string[];
}
