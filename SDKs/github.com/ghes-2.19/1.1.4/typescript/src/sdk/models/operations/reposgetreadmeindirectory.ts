import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetReadmeInDirectoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dir" })
  dir: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetReadmeInDirectoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class ReposGetReadmeInDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetReadmeInDirectoryPathParams;

  @Metadata()
  queryParams: ReposGetReadmeInDirectoryQueryParams;
}


export class ReposGetReadmeInDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  contentFile?: shared.ContentFile;

  @Metadata()
  validationError?: shared.ValidationError;
}
