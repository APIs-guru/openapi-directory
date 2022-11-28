import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrapListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class TrapListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrapListPathParams;
}


export class TrapListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trapList200ApplicationJsonStrings?: string[];
}
