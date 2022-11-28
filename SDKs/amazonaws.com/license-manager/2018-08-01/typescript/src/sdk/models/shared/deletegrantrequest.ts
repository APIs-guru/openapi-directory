import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: string;
}
