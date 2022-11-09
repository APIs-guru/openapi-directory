import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceFleetReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;
}
