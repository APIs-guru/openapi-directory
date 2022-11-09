import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.
**/
export declare class GetMlModelOutput extends SpeakeasyBase {
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    endpointInfo?: RealtimeEndpointInfo;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    logUri?: string;
    mlModelId?: string;
    mlModelType?: MlModelTypeEnum;
    message?: string;
    name?: string;
    recipe?: string;
    schema?: string;
    scoreThreshold?: number;
    scoreThresholdLastUpdatedAt?: Date;
    sizeInBytes?: number;
    startedAt?: Date;
    status?: EntityStatusEnum;
    trainingDataSourceId?: string;
    trainingParameters?: Map<string, string>;
}
