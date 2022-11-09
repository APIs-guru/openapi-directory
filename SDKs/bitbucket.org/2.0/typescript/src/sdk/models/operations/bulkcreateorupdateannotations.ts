import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BulkCreateOrUpdateAnnotationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class BulkCreateOrUpdateAnnotationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkCreateOrUpdateAnnotationsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>[];
}


export class BulkCreateOrUpdateAnnotationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reportAnnotations?: Map<string, any>[];
}
