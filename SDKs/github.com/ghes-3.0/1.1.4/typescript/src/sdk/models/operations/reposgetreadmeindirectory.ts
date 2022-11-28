import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetReadmeInDirectoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dir" })
  dir: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetReadmeInDirectoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class ReposGetReadmeInDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetReadmeInDirectoryPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposGetReadmeInDirectoryQueryParams;
}


export class ReposGetReadmeInDirectoryResponse extends SpeakeasyBase {
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
