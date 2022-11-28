import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class NewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Triplet })
  request: shared.Triplet[];
}


export class NewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  new200ApplicationJsonString?: string;
}
