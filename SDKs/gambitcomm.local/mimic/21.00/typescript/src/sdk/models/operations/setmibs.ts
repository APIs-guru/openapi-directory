import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetMibsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SetMibsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetMibsPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Triplet })
  request: shared.Triplet[];
}


export class SetMibsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setMibs200ApplicationJsonString?: string;
}
