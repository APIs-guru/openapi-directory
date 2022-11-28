import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container health check command and associated configuration parameters for the container.
**/
export declare class AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails extends SpeakeasyBase {
    command?: string[];
    interval?: number;
    retries?: number;
    startPeriod?: number;
    timeout?: number;
}
