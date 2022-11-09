import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=annotationId" })
  annotationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetAnnotationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationPathParams;
}


export class GetAnnotationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  reportAnnotation?: Map<string, any>;
}
