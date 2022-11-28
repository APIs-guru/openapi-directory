import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserGetCredentialTypesForTargetAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;
}


export class UserGetCredentialTypesForTargetAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserGetCredentialTypesForTargetAccountPathParams;
}


export class UserGetCredentialTypesForTargetAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
