import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletedFaces" })
  deletedFaces?: string[];
}
