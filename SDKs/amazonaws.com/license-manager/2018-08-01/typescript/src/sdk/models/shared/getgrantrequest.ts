import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
