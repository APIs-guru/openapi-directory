import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsGetRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha" })
  sha: string;
}


export class GistsGetRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsGetRevisionPathParams;
}


export class GistsGetRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gistSimple?: shared.GistSimple;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
