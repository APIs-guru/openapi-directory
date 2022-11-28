import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Face } from "./face";



export class ListFacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Faces", elemType: Face })
  faces?: Face[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
