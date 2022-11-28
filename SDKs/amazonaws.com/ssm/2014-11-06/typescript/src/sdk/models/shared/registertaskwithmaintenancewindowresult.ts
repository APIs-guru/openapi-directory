import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterTaskWithMaintenanceWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowTaskId" })
  windowTaskId?: string;
}
