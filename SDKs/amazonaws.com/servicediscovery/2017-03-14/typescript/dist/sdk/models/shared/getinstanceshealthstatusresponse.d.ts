import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthStatusEnum } from "./healthstatusenum";
export declare class GetInstancesHealthStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    status?: Map<string, HealthStatusEnum>;
}
