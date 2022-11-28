import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SplitOidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=OID" })
  oid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SplitOidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SplitOidPathParams;
}


export class SplitOidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  splitOid200ApplicationJsonStrings?: string[];
}
