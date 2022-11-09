import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAnnotationPathParams extends SpeakeasyBase {
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


export class DeleteAnnotationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnnotationPathParams;
}


export class DeleteAnnotationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
