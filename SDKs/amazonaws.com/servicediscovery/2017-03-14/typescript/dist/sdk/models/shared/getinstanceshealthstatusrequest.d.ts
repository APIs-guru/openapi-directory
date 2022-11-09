import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesHealthStatusRequest extends SpeakeasyBase {
    instances?: string[];
    maxResults?: number;
    nextToken?: string;
    serviceId: string;
}
