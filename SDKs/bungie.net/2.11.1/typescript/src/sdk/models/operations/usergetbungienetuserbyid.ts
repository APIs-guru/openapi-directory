import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserGetBungieNetUserByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserGetBungieNetUserByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserGetBungieNetUserByIdPathParams;
}


export class UserGetBungieNetUserByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
