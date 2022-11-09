import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmEnum } from "./algorithmenum";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
**/
export declare class MlModel extends SpeakeasyBase {
    algorithm?: AlgorithmEnum;
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    endpointInfo?: RealtimeEndpointInfo;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    mlModelId?: string;
    mlModelType?: MlModelTypeEnum;
    message?: string;
    name?: string;
    scoreThreshold?: number;
    scoreThresholdLastUpdatedAt?: Date;
    sizeInBytes?: number;
    startedAt?: Date;
    status?: EntityStatusEnum;
    trainingDataSourceId?: string;
    trainingParameters?: Map<string, string>;
}
