import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsGetCommitAuthorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsGetCommitAuthorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class MigrationsGetCommitAuthorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsGetCommitAuthorsPathParams;

  @Metadata()
  queryParams: MigrationsGetCommitAuthorsQueryParams;
}


export class MigrationsGetCommitAuthorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.PorterAuthor })
  porterAuthors?: shared.PorterAuthor[];
}
