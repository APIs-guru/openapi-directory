import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationsForReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetAnnotationsForReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationsForReportPathParams;
}


export class GetAnnotationsForReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paginatedAnnotations?: shared.PaginatedAnnotations;
}
