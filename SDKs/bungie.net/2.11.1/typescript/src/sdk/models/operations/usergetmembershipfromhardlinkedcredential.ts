import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserGetMembershipFromHardLinkedCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=crType" })
  crType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=credential" })
  credential: string;
}


export class UserGetMembershipFromHardLinkedCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserGetMembershipFromHardLinkedCredentialPathParams;
}


export class UserGetMembershipFromHardLinkedCredentialResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
