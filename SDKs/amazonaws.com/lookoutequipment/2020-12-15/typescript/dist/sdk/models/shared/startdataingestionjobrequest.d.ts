import { SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
export declare class StartDataIngestionJobRequest extends SpeakeasyBase {
    clientToken: string;
    datasetName: string;
    ingestionInputConfiguration: IngestionInputConfiguration;
    roleArn: string;
}
