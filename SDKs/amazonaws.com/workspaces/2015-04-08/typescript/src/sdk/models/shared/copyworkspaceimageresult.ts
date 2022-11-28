import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyWorkspaceImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;
}
