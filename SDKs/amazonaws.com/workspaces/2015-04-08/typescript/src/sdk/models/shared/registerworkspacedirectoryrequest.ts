import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TenancyEnum } from "./tenancyenum";



export class RegisterWorkspaceDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=EnableSelfService" })
  enableSelfService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableWorkDocs" })
  enableWorkDocs: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Tenancy" })
  tenancy?: TenancyEnum;
}
