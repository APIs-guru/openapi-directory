import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class EnterpriseAdminCreateEnterpriseServerLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateEnterpriseServerLicenseRequestBody;
}


export class EnterpriseAdminCreateEnterpriseServerLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
