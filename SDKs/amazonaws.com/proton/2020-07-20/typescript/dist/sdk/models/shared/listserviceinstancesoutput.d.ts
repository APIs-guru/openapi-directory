import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInstanceSummary } from "./serviceinstancesummary";
export declare class ListServiceInstancesOutput extends SpeakeasyBase {
    nextToken?: string;
    serviceInstances: ServiceInstanceSummary[];
}
