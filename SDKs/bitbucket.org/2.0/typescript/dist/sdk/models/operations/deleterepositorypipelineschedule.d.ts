import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
    repoSlug: string;
    scheduleUuid: string;
    workspace: string;
}
export declare class DeleteRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryPipelineSchedulePathParams;
}
export declare class DeleteRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
