import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetMibsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SetMibsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetMibsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Triplet })
  request: shared.Triplet[];
}


export class SetMibsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setMibs200ApplicationJsonString?: string;
}
