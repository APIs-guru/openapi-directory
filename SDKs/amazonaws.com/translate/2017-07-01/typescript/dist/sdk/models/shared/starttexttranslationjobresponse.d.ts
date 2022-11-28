import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StartTextTranslationJobResponse extends SpeakeasyBase {
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
