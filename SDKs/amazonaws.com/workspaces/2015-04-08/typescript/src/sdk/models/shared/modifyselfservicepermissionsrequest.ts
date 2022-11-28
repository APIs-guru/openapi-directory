import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelfservicePermissions } from "./selfservicepermissions";



export class ModifySelfservicePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=SelfservicePermissions" })
  selfservicePermissions: SelfservicePermissions;
}
