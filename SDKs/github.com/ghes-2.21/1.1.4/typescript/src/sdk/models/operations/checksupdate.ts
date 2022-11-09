import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_run_id" })
  checkRunId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksUpdateRequestBodyActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=label" })
  label: string;
}

export enum ChecksUpdateRequestBodyConclusionEnum {
    ActionRequired = "action_required"
,    Cancelled = "cancelled"
,    Failure = "failure"
,    Neutral = "neutral"
,    Success = "success"
,    Skipped = "skipped"
,    Stale = "stale"
,    TimedOut = "timed_out"
}

export enum ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum {
    Notice = "notice"
,    Warning = "warning"
,    Failure = "failure"
}


export class ChecksUpdateRequestBodyOutputAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation_level" })
  annotationLevel: ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum;

  @Metadata({ data: "json, name=end_column" })
  endColumn?: number;

  @Metadata({ data: "json, name=end_line" })
  endLine: number;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=raw_details" })
  rawDetails?: string;

  @Metadata({ data: "json, name=start_column" })
  startColumn?: number;

  @Metadata({ data: "json, name=start_line" })
  startLine: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class ChecksUpdateRequestBodyOutputImages extends SpeakeasyBase {
  @Metadata({ data: "json, name=alt" })
  alt: string;

  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl: string;
}


// ChecksUpdateRequestBodyOutput
/** 
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#output-object-1) description.
**/
export class ChecksUpdateRequestBodyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations", elemType: operations.ChecksUpdateRequestBodyOutputAnnotations })
  annotations?: ChecksUpdateRequestBodyOutputAnnotations[];

  @Metadata({ data: "json, name=images", elemType: operations.ChecksUpdateRequestBodyOutputImages })
  images?: ChecksUpdateRequestBodyOutputImages[];

  @Metadata({ data: "json, name=summary" })
  summary: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

export enum ChecksUpdateRequestBodyStatusEnum {
    Queued = "queued"
,    InProgress = "in_progress"
,    Completed = "completed"
}


export class ChecksUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.ChecksUpdateRequestBodyActions })
  actions?: ChecksUpdateRequestBodyActions[];

  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=conclusion" })
  conclusion?: ChecksUpdateRequestBodyConclusionEnum;

  @Metadata({ data: "json, name=details_url" })
  detailsUrl?: string;

  @Metadata({ data: "json, name=external_id" })
  externalId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=output" })
  output?: ChecksUpdateRequestBodyOutput;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ChecksUpdateRequestBodyStatusEnum;
}


export class ChecksUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChecksUpdateRequestBody;
}


export class ChecksUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkRun?: shared.CheckRun;
}
