import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystem } from "./operatingsystem";
import { WorkspaceImageRequiredTenancyEnum } from "./workspaceimagerequiredtenancyenum";
import { WorkspaceImageStateEnum } from "./workspaceimagestateenum";


// WorkspaceImage
/** 
 * Describes a WorkSpace image.
**/
export class WorkspaceImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystem;

  @Metadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @Metadata({ data: "json, name=RequiredTenancy" })
  requiredTenancy?: WorkspaceImageRequiredTenancyEnum;

  @Metadata({ data: "json, name=State" })
  state?: WorkspaceImageStateEnum;
}
