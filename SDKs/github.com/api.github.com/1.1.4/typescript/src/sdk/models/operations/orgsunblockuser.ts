import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgsUnblockUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsUnblockUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsUnblockUserPathParams;
}


export class OrgsUnblockUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
