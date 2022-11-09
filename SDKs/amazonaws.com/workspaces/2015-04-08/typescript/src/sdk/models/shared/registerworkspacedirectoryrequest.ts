import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { TenancyEnum } from "./tenancyenum";


export class RegisterWorkspaceDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=EnableSelfService" })
  enableSelfService?: boolean;

  @Metadata({ data: "json, name=EnableWorkDocs" })
  enableWorkDocs: boolean;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Tenancy" })
  tenancy?: TenancyEnum;
}
