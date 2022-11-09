import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSetSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings: string;
}


export class EnterpriseAdminSetSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetSettingsRequestBody;
}


export class EnterpriseAdminSetSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
