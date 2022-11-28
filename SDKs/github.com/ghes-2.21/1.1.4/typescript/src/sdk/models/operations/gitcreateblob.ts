import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitCreateBlobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitCreateBlobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;
}


export class GitCreateBlobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitCreateBlobPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GitCreateBlobRequestBody;
}


export class GitCreateBlobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  shortBlob?: shared.ShortBlob;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
