import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkspaceImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId: string;
}
