import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeletePublicKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_ids" })
  keyIds: string;
}


export class EnterpriseAdminDeletePublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeletePublicKeyPathParams;
}


export class EnterpriseAdminDeletePublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
