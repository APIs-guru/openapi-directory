import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksCreateRequestBodyActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=label" })
  label: string;
}

export enum ChecksCreateRequestBodyConclusionEnum {
    ActionRequired = "action_required"
,    Cancelled = "cancelled"
,    Failure = "failure"
,    Neutral = "neutral"
,    Success = "success"
,    Skipped = "skipped"
,    Stale = "stale"
,    TimedOut = "timed_out"
}

export enum ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum {
    Notice = "notice"
,    Warning = "warning"
,    Failure = "failure"
}


export class ChecksCreateRequestBodyOutputAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation_level" })
  annotationLevel: ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum;

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


export class ChecksCreateRequestBodyOutputImages extends SpeakeasyBase {
  @Metadata({ data: "json, name=alt" })
  alt: string;

  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl: string;
}


// ChecksCreateRequestBodyOutput
/** 
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#output-object) description.
**/
export class ChecksCreateRequestBodyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations", elemType: operations.ChecksCreateRequestBodyOutputAnnotations })
  annotations?: ChecksCreateRequestBodyOutputAnnotations[];

  @Metadata({ data: "json, name=images", elemType: operations.ChecksCreateRequestBodyOutputImages })
  images?: ChecksCreateRequestBodyOutputImages[];

  @Metadata({ data: "json, name=summary" })
  summary: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum ChecksCreateRequestBodyStatusEnum {
    Queued = "queued"
,    InProgress = "in_progress"
,    Completed = "completed"
}


export class ChecksCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.ChecksCreateRequestBodyActions })
  actions?: ChecksCreateRequestBodyActions[];

  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=conclusion" })
  conclusion?: ChecksCreateRequestBodyConclusionEnum;

  @Metadata({ data: "json, name=details_url" })
  detailsUrl?: string;

  @Metadata({ data: "json, name=external_id" })
  externalId?: string;

  @Metadata({ data: "json, name=head_sha" })
  headSha: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=output" })
  output?: ChecksCreateRequestBodyOutput;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ChecksCreateRequestBodyStatusEnum;
}


export class ChecksCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChecksCreateRequestBody;
}


export class ChecksCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkRun?: shared.CheckRun;
}
