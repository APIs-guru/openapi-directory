import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class RemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemovePathParams;
}


export class RemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  remove200ApplicationJsonString?: string;
}
