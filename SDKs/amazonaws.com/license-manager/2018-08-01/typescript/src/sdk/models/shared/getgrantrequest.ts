import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
