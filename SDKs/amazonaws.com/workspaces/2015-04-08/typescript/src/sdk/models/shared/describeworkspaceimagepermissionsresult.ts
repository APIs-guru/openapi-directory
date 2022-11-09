import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImagePermission } from "./imagepermission";


export class DescribeWorkspaceImagePermissionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;

  @Metadata({ data: "json, name=ImagePermissions", elemType: shared.ImagePermission })
  imagePermissions?: ImagePermission[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
