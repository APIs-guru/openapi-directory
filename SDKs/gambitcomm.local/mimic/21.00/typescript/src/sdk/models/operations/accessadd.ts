import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agents" })
  agents: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class AccessAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccessAddPathParams;
}


export class AccessAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessAdd200ApplicationJsonString?: string;
}
