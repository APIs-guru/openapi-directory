import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletedFaces" })
  deletedFaces?: string[];
}
