import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminUpgradeLicenseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=license" })
  license?: string;
}


export class EnterpriseAdminUpgradeLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpgradeLicenseRequestBody;
}


export class EnterpriseAdminUpgradeLicenseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
