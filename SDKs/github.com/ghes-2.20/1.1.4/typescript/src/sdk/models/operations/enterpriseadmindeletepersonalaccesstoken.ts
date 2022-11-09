import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeletePersonalAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token_id" })
  tokenId: number;
}


export class EnterpriseAdminDeletePersonalAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeletePersonalAccessTokenPathParams;
}


export class EnterpriseAdminDeletePersonalAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
