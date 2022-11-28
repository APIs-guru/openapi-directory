import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";
/**
 * Input object for the endpoint
**/
export declare class EndpointInput extends SpeakeasyBase {
    endTimeOffset?: string;
    endpointName: string;
    featuresAttribute?: string;
    inferenceAttribute?: string;
    localPath: string;
    probabilityAttribute?: string;
    probabilityThresholdAttribute?: number;
    s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;
    s3InputMode?: ProcessingS3InputModeEnum;
    startTimeOffset?: string;
}
