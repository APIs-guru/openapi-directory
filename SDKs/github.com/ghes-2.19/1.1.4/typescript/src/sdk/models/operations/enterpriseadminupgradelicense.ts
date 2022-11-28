import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminUpgradeLicenseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;
}


export class EnterpriseAdminUpgradeLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpgradeLicenseRequestBody;
}


export class EnterpriseAdminUpgradeLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
