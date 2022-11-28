import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserGetMembershipFromHardLinkedCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=crType" })
  crType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credential" })
  credential: string;
}


export class UserGetMembershipFromHardLinkedCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserGetMembershipFromHardLinkedCredentialPathParams;
}


export class UserGetMembershipFromHardLinkedCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
