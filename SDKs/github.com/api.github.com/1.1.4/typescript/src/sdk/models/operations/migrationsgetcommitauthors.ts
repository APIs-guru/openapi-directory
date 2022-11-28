import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsGetCommitAuthorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsGetCommitAuthorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class MigrationsGetCommitAuthorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsGetCommitAuthorsPathParams;

  @SpeakeasyMetadata()
  queryParams: MigrationsGetCommitAuthorsQueryParams;
}


export class MigrationsGetCommitAuthorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.PorterAuthor })
  porterAuthors?: shared.PorterAuthor[];
}
