import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class AccessDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccessDelPathParams;
}


export class AccessDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessDel200ApplicationJsonString?: string;
}
