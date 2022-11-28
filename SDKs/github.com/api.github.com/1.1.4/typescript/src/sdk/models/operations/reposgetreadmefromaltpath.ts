import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetReadmeFromAltPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dir" })
  dir: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetReadmeFromAltPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class ReposGetReadmeFromAltPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetReadmeFromAltPathPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposGetReadmeFromAltPathQueryParams;
}


export class ReposGetReadmeFromAltPathResponse extends SpeakeasyBase {
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
