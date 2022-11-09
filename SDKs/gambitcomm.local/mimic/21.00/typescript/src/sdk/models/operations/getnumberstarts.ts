import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNumberStartsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetNumberStartsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNumberStartsPathParams;
}


export class GetNumberStartsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNumberStarts200ApplicationJsonInt32Integer?: number;
}
