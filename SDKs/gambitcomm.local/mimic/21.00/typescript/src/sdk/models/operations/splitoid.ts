import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SplitOidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=OID" })
  oid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SplitOidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SplitOidPathParams;
}


export class SplitOidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  splitOid200ApplicationJsonStrings?: string[];
}
