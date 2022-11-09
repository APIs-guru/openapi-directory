import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SelfservicePermissions } from "./selfservicepermissions";


export class ModifySelfservicePermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=SelfservicePermissions" })
  selfservicePermissions: SelfservicePermissions;
}
