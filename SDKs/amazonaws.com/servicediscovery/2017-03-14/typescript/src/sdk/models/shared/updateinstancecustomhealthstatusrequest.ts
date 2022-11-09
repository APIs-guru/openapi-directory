import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomHealthStatusEnum } from "./customhealthstatusenum";


export class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=ServiceId" })
  serviceId: string;

  @Metadata({ data: "json, name=Status" })
  status: CustomHealthStatusEnum;
}
