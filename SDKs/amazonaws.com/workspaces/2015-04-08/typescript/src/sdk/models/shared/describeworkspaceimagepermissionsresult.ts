import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImagePermission } from "./imagepermission";



export class DescribeWorkspaceImagePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=ImagePermissions", elemType: ImagePermission })
  imagePermissions?: ImagePermission[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
