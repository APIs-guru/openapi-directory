import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceRegistrationWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=periodDays" })
  periodDays: number;

  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;
}
