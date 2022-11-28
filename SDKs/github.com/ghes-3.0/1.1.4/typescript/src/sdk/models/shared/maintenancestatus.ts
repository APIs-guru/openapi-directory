import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MaintenanceStatusConnectionServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;
}


export class MaintenanceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_services", elemType: MaintenanceStatusConnectionServices })
  connectionServices?: MaintenanceStatusConnectionServices[];

  @SpeakeasyMetadata({ data: "json, name=scheduled_time" })
  scheduledTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
