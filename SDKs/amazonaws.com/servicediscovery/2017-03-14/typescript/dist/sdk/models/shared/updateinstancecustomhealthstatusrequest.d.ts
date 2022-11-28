import { SpeakeasyBase } from "../../../internal/utils";
import { CustomHealthStatusEnum } from "./customhealthstatusenum";
export declare class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
    instanceId: string;
    serviceId: string;
    status: CustomHealthStatusEnum;
}
