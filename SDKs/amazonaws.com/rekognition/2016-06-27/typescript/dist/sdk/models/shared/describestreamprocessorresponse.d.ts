import { SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";
import { StreamProcessorStatusEnum } from "./streamprocessorstatusenum";
export declare class DescribeStreamProcessorResponse extends SpeakeasyBase {
    creationTimestamp?: Date;
    input?: StreamProcessorInput;
    lastUpdateTimestamp?: Date;
    name?: string;
    output?: StreamProcessorOutput;
    roleArn?: string;
    settings?: StreamProcessorSettings;
    status?: StreamProcessorStatusEnum;
    statusMessage?: string;
    streamProcessorArn?: string;
}
