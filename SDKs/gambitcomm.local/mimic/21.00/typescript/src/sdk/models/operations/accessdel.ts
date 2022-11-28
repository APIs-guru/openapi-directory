import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessDelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class AccessDelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccessDelPathParams;
}


export class AccessDelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessDel200ApplicationJsonString?: string;
}
