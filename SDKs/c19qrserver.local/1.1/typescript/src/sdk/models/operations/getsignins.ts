import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSigninsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=less_than" })
  lessThan?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return_count" })
  returnCount?: number;
}


export class GetSigninsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSigninsQueryParams;
}


export class GetSigninsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata()
  keyFailure?: shared.KeyFailure;

  @Metadata({ elemType: shared.Signin })
  signins?: shared.Signin[];
}
