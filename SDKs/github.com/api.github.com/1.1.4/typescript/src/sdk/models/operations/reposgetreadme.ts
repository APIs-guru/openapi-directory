import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetReadmePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetReadmeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class ReposGetReadmeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetReadmePathParams;

  @SpeakeasyMetadata()
  queryParams: ReposGetReadmeQueryParams;
}


export class ReposGetReadmeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  contentFile?: shared.ContentFile;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
