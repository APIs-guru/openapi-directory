import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRetargetingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetRetargetingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRetargetingIdPathParams;
}


export class GetRetargetingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
