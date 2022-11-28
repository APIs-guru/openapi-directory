import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_run_id" })
  checkRunId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksUpdateRequestBodyActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}

export enum ChecksUpdateRequestBodyConclusionEnum {
    ActionRequired = "action_required",
    Cancelled = "cancelled",
    Failure = "failure",
    Neutral = "neutral",
    Success = "success",
    Skipped = "skipped",
    Stale = "stale",
    TimedOut = "timed_out"
}

export enum ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum {
    Notice = "notice",
    Warning = "warning",
    Failure = "failure"
}


export class ChecksUpdateRequestBodyOutputAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation_level" })
  annotationLevel: ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=end_column" })
  endColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=end_line" })
  endLine: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=raw_details" })
  rawDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=start_column" })
  startColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=start_line" })
  startLine: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class ChecksUpdateRequestBodyOutputImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt: string;

  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl: string;
}


// ChecksUpdateRequestBodyOutput
/** 
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#output-object-1) description.
**/
export class ChecksUpdateRequestBodyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: ChecksUpdateRequestBodyOutputAnnotations })
  annotations?: ChecksUpdateRequestBodyOutputAnnotations[];

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ChecksUpdateRequestBodyOutputImages })
  images?: ChecksUpdateRequestBodyOutputImages[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

export enum ChecksUpdateRequestBodyStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}


export class ChecksUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ChecksUpdateRequestBodyActions })
  actions?: ChecksUpdateRequestBodyActions[];

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion?: ChecksUpdateRequestBodyConclusionEnum;

  @SpeakeasyMetadata({ data: "json, name=details_url" })
  detailsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: ChecksUpdateRequestBodyOutput;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChecksUpdateRequestBodyStatusEnum;
}


export class ChecksUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChecksUpdateRequestBody;
}


export class ChecksUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkRun?: shared.CheckRun;
}
