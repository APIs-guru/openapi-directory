import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopPipelinePathParams extends SpeakeasyBase {
    pipelineUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class StopPipelineRequest extends SpeakeasyBase {
    pathParams: StopPipelinePathParams;
}
export declare class StopPipelineResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
