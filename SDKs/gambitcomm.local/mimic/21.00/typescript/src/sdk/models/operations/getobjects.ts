import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=OID" })
  oid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetObjectsPathParams;
}


export class GetObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjects200ApplicationJsonStrings?: string[];
}
