import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class NewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Triplet })
  request: shared.Triplet[];
}


export class NewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  new200ApplicationJsonString?: string;
}
