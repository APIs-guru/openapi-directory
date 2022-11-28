import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportWorkspaceImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;
}
