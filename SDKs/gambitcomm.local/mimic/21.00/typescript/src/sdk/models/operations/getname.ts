import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=OID" })
  oid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNamePathParams;
}


export class GetNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getName200ApplicationJsonString?: string;
}
