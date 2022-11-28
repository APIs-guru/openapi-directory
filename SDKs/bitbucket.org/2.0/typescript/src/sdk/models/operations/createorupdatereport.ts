import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrUpdateReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateOrUpdateReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrUpdateReportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateOrUpdateReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  report?: Map<string, any>;
}
