import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksCreateRequestBodyActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}

export enum ChecksCreateRequestBodyConclusionEnum {
    ActionRequired = "action_required",
    Cancelled = "cancelled",
    Failure = "failure",
    Neutral = "neutral",
    Success = "success",
    Skipped = "skipped",
    Stale = "stale",
    TimedOut = "timed_out"
}

export enum ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum {
    Notice = "notice",
    Warning = "warning",
    Failure = "failure"
}


export class ChecksCreateRequestBodyOutputAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation_level" })
  annotationLevel: ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum;

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


export class ChecksCreateRequestBodyOutputImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt: string;

  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl: string;
}


// ChecksCreateRequestBodyOutput
/** 
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#output-object) description.
**/
export class ChecksCreateRequestBodyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: ChecksCreateRequestBodyOutputAnnotations })
  annotations?: ChecksCreateRequestBodyOutputAnnotations[];

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ChecksCreateRequestBodyOutputImages })
  images?: ChecksCreateRequestBodyOutputImages[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum ChecksCreateRequestBodyStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}


export class ChecksCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ChecksCreateRequestBodyActions })
  actions?: ChecksCreateRequestBodyActions[];

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion?: ChecksCreateRequestBodyConclusionEnum;

  @SpeakeasyMetadata({ data: "json, name=details_url" })
  detailsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=head_sha" })
  headSha: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: ChecksCreateRequestBodyOutput;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChecksCreateRequestBodyStatusEnum;
}


export class ChecksCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChecksCreateRequestBody;
}


export class ChecksCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkRun?: shared.CheckRun;
}
