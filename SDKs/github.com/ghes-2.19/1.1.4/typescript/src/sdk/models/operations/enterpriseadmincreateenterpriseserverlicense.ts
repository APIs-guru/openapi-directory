import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=license" })
  license: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class EnterpriseAdminCreateEnterpriseServerLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateEnterpriseServerLicenseRequestBody;
}


export class EnterpriseAdminCreateEnterpriseServerLicenseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
