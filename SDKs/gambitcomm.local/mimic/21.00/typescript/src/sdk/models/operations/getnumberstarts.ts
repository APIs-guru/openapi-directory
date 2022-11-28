import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNumberStartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetNumberStartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNumberStartsPathParams;
}


export class GetNumberStartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNumberStarts200ApplicationJsonInt32Integer?: number;
}
