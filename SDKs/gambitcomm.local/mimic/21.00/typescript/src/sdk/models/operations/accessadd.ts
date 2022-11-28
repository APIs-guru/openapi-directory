import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agents" })
  agents: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class AccessAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccessAddPathParams;
}


export class AccessAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessAdd200ApplicationJsonString?: string;
}
