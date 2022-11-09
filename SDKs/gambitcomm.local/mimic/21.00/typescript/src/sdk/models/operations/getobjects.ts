import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=OID" })
  oid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetObjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectsPathParams;
}


export class GetObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjects200ApplicationJsonStrings?: string[];
}
