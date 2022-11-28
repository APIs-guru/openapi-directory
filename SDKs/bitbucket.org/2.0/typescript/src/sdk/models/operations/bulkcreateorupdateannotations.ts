import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkCreateOrUpdateAnnotationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class BulkCreateOrUpdateAnnotationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkCreateOrUpdateAnnotationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>[];
}


export class BulkCreateOrUpdateAnnotationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportAnnotations?: Map<string, any>[];
}
