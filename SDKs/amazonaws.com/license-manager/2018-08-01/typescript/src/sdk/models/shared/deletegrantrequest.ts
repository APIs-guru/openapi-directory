import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=Version" })
  version: string;
}
