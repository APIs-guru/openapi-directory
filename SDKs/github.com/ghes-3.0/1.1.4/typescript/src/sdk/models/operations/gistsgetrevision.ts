import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsGetRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sha" })
  sha: string;
}


export class GistsGetRevisionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsGetRevisionPathParams;
}


export class GistsGetRevisionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistSimple?: shared.GistSimple;

  @Metadata()
  validationError?: shared.ValidationError;
}
