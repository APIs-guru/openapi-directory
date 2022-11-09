import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWorkspaceImagePermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowCopyImage" })
  allowCopyImage: boolean;

  @Metadata({ data: "json, name=ImageId" })
  imageId: string;

  @Metadata({ data: "json, name=SharedAccountId" })
  sharedAccountId: string;
}
