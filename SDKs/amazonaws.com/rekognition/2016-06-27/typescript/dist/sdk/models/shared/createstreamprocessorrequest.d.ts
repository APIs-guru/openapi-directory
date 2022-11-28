import { SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";
export declare class CreateStreamProcessorRequest extends SpeakeasyBase {
    input: StreamProcessorInput;
    name: string;
    output: StreamProcessorOutput;
    roleArn: string;
    settings: StreamProcessorSettings;
    tags?: Map<string, string>;
}
