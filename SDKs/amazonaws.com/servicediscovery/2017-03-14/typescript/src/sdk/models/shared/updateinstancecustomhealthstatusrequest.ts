import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomHealthStatusEnum } from "./customhealthstatusenum";



export class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: CustomHealthStatusEnum;
}
