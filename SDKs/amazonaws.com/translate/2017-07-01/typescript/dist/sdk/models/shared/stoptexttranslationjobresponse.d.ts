import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class StopTextTranslationJobResponse extends SpeakeasyBase {
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
