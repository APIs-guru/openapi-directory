import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserGetBungieNetUserByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserGetBungieNetUserByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserGetBungieNetUserByIdPathParams;
}


export class UserGetBungieNetUserByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
