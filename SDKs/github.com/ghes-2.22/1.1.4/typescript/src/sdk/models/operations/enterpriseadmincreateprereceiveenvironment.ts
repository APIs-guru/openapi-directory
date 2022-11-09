import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=image_url" })
  imageUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class EnterpriseAdminCreatePreReceiveEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreatePreReceiveEnvironmentRequestBody;
}


export class EnterpriseAdminCreatePreReceiveEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
