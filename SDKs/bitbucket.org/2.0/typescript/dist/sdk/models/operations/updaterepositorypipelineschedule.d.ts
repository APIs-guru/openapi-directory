import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
    repoSlug: string;
    scheduleUuid: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineSchedulePathParams;
    request: Map<string, any>;
}
export declare class UpdateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineSchedule?: Map<string, any>;
}
