import { SpeakeasyBase } from "../../../internal/utils";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { S3Configuration } from "./s3configuration";
export declare class DiscoverInputSchemaRequest extends SpeakeasyBase {
    inputProcessingConfiguration?: InputProcessingConfiguration;
    inputStartingPositionConfiguration?: InputStartingPositionConfiguration;
    resourceArn?: string;
    roleArn?: string;
    s3Configuration?: S3Configuration;
}
