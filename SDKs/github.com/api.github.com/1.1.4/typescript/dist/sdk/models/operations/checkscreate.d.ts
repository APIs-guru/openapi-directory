import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksCreatePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ChecksCreateRequestBodyActions extends SpeakeasyBase {
    description: string;
    identifier: string;
    label: string;
}
export declare enum ChecksCreateRequestBodyConclusionEnum {
    ActionRequired = "action_required",
    Cancelled = "cancelled",
    Failure = "failure",
    Neutral = "neutral",
    Success = "success",
    Skipped = "skipped",
    Stale = "stale",
    TimedOut = "timed_out"
}
export declare enum ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum {
    Notice = "notice",
    Warning = "warning",
    Failure = "failure"
}
export declare class ChecksCreateRequestBodyOutputAnnotations extends SpeakeasyBase {
    annotationLevel: ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum;
    endColumn?: number;
    endLine: number;
    message: string;
    path: string;
    rawDetails?: string;
    startColumn?: number;
    startLine: number;
    title?: string;
}
export declare class ChecksCreateRequestBodyOutputImages extends SpeakeasyBase {
    alt: string;
    caption?: string;
    imageUrl: string;
}
/**
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object) description.
**/
export declare class ChecksCreateRequestBodyOutput extends SpeakeasyBase {
    annotations?: ChecksCreateRequestBodyOutputAnnotations[];
    images?: ChecksCreateRequestBodyOutputImages[];
    summary: string;
    text?: string;
    title: string;
}
export declare enum ChecksCreateRequestBodyStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
export declare class ChecksCreateRequestBody extends SpeakeasyBase {
    actions?: ChecksCreateRequestBodyActions[];
    completedAt?: string;
    conclusion?: ChecksCreateRequestBodyConclusionEnum;
    detailsUrl?: string;
    externalId?: string;
    headSha: string;
    name: string;
    output?: ChecksCreateRequestBodyOutput;
    startedAt?: string;
    status?: ChecksCreateRequestBodyStatusEnum;
}
export declare class ChecksCreateRequest extends SpeakeasyBase {
    pathParams: ChecksCreatePathParams;
    request?: ChecksCreateRequestBody;
}
export declare class ChecksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkRun?: shared.CheckRun;
}
