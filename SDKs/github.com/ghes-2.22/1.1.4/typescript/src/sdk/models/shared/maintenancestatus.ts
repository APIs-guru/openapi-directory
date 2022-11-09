import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MaintenanceStatusConnectionServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=number" })
  number: number;
}


export class MaintenanceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_services", elemType: shared.MaintenanceStatusConnectionServices })
  connectionServices?: MaintenanceStatusConnectionServices[];

  @Metadata({ data: "json, name=scheduled_time" })
  scheduledTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
