import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksUpdatePathParams extends SpeakeasyBase {
    checkRunId: number;
    owner: string;
    repo: string;
}
export declare class ChecksUpdateRequestBodyActions extends SpeakeasyBase {
    description: string;
    identifier: string;
    label: string;
}
export declare enum ChecksUpdateRequestBodyConclusionEnum {
    ActionRequired = "action_required",
    Cancelled = "cancelled",
    Failure = "failure",
    Neutral = "neutral",
    Success = "success",
    Skipped = "skipped",
    Stale = "stale",
    TimedOut = "timed_out"
}
export declare enum ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum {
    Notice = "notice",
    Warning = "warning",
    Failure = "failure"
}
export declare class ChecksUpdateRequestBodyOutputAnnotations extends SpeakeasyBase {
    annotationLevel: ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum;
    endColumn?: number;
    endLine: number;
    message: string;
    path: string;
    rawDetails?: string;
    startColumn?: number;
    startLine: number;
    title?: string;
}
export declare class ChecksUpdateRequestBodyOutputImages extends SpeakeasyBase {
    alt: string;
    caption?: string;
    imageUrl: string;
}
/**
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.18/rest/reference/checks#output-object-1) description.
**/
export declare class ChecksUpdateRequestBodyOutput extends SpeakeasyBase {
    annotations?: ChecksUpdateRequestBodyOutputAnnotations[];
    images?: ChecksUpdateRequestBodyOutputImages[];
    summary: string;
    text?: string;
    title?: string;
}
export declare enum ChecksUpdateRequestBodyStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
export declare class ChecksUpdateRequestBody extends SpeakeasyBase {
    actions?: ChecksUpdateRequestBodyActions[];
    completedAt?: Date;
    conclusion?: ChecksUpdateRequestBodyConclusionEnum;
    detailsUrl?: string;
    externalId?: string;
    name?: string;
    output?: ChecksUpdateRequestBodyOutput;
    startedAt?: Date;
    status?: ChecksUpdateRequestBodyStatusEnum;
}
export declare class ChecksUpdateRequest extends SpeakeasyBase {
    pathParams: ChecksUpdatePathParams;
    request?: ChecksUpdateRequestBody;
}
export declare class ChecksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkRun?: shared.CheckRun;
}
