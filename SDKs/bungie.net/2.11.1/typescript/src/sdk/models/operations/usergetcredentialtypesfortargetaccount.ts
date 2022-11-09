import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserGetCredentialTypesForTargetAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;
}


export class UserGetCredentialTypesForTargetAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserGetCredentialTypesForTargetAccountPathParams;
}


export class UserGetCredentialTypesForTargetAccountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
