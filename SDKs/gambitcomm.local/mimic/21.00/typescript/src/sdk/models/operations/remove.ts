import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class RemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemovePathParams;
}


export class RemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  remove200ApplicationJsonString?: string;
}
