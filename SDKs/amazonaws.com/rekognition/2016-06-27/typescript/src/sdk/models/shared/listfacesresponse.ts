import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Face } from "./face";


export class ListFacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @Metadata({ data: "json, name=Faces", elemType: shared.Face })
  faces?: Face[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
