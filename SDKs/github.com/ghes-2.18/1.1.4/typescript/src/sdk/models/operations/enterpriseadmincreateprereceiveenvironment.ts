import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class EnterpriseAdminCreatePreReceiveEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreatePreReceiveEnvironmentRequestBody;
}


export class EnterpriseAdminCreatePreReceiveEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
