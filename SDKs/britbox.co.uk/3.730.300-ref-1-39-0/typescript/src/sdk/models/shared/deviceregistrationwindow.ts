import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceRegistrationWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate: Date;

  @Metadata({ data: "json, name=limit" })
  limit: number;

  @Metadata({ data: "json, name=periodDays" })
  periodDays: number;

  @Metadata({ data: "json, name=remaining" })
  remaining: number;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;
}
