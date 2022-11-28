import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
import { WorkspaceImageRequiredTenancyEnum } from "./workspaceimagerequiredtenancyenum";
import { WorkspaceImageStateEnum } from "./workspaceimagestateenum";



// WorkspaceImage
/** 
 * Describes a WorkSpace image.
**/
export class WorkspaceImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystem;

  @SpeakeasyMetadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=RequiredTenancy" })
  requiredTenancy?: WorkspaceImageRequiredTenancyEnum;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: WorkspaceImageStateEnum;
}
