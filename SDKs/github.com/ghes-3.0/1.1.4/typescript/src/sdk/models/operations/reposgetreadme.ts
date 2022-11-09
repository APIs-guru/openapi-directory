import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetReadmePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetReadmeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class ReposGetReadmeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetReadmePathParams;

  @Metadata()
  queryParams: ReposGetReadmeQueryParams;
}


export class ReposGetReadmeResponse extends SpeakeasyBase {
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
