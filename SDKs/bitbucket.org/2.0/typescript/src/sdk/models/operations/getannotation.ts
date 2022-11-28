import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotationId" })
  annotationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationPathParams;
}


export class GetAnnotationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  reportAnnotation?: Map<string, any>;
}
