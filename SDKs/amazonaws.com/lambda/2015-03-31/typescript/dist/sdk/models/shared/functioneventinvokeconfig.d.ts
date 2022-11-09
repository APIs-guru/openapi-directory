import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationConfig } from "./destinationconfig";
export declare class FunctionEventInvokeConfig extends SpeakeasyBase {
    destinationConfig?: DestinationConfig;
    functionArn?: string;
    lastModified?: Date;
    maximumEventAgeInSeconds?: number;
    maximumRetryAttempts?: number;
}
