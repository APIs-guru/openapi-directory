import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
import { FinishedWorldsSummary } from "./finishedworldssummary";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";
export declare class DescribeWorldGenerationJobResponse extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdAt?: Date;
    failureCode?: WorldGenerationJobErrorCodeEnum;
    failureReason?: string;
    finishedWorldsSummary?: FinishedWorldsSummary;
    status?: WorldGenerationJobStatusEnum;
    tags?: Map<string, string>;
    template?: string;
    worldCount?: WorldCount;
    worldTags?: Map<string, string>;
}
