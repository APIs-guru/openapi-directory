import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitCreateBlobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitCreateBlobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;
}


export class GitCreateBlobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitCreateBlobPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GitCreateBlobRequestBody;
}


export class GitCreateBlobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  shortBlob?: shared.ShortBlob;

  @Metadata()
  validationError?: shared.ValidationError;
}
