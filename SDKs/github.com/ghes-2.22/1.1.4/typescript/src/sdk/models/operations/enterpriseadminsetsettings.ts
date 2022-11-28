import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminSetSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: string;
}


export class EnterpriseAdminSetSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetSettingsRequestBody;
}


export class EnterpriseAdminSetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
