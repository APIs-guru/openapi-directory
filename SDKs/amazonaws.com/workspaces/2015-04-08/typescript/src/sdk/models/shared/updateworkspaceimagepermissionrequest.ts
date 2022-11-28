import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWorkspaceImagePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCopyImage" })
  allowCopyImage: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}
