import { SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";
export declare class CreateWorldGenerationJobResponse extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdAt?: Date;
    failureCode?: WorldGenerationJobErrorCodeEnum;
    status?: WorldGenerationJobStatusEnum;
    tags?: Map<string, string>;
    template?: string;
    worldCount?: WorldCount;
    worldTags?: Map<string, string>;
}
