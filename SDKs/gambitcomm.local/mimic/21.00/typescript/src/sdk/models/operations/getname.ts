import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=OID" })
  oid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNamePathParams;
}


export class GetNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getName200ApplicationJsonString?: string;
}
