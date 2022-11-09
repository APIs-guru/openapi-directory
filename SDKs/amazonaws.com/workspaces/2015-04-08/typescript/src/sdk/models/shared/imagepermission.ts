import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImagePermission
/** 
 * Describes the AWS accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.
**/
export class ImagePermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=SharedAccountId" })
  sharedAccountId?: string;
}
