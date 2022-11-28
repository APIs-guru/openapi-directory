import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSigninsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=less_than" })
  lessThan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return_count" })
  returnCount?: number;
}


export class GetSigninsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSigninsQueryParams;
}


export class GetSigninsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;

  @SpeakeasyMetadata()
  keyFailure?: shared.KeyFailure;

  @SpeakeasyMetadata({ elemType: shared.Signin })
  signins?: shared.Signin[];
}
