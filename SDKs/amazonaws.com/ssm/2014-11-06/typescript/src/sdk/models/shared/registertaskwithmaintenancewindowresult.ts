import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterTaskWithMaintenanceWindowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowTaskId" })
  windowTaskId?: string;
}
