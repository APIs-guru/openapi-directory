import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesPathParams;
}


export class GetInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInstances200ApplicationJsonStrings?: string[];
}
