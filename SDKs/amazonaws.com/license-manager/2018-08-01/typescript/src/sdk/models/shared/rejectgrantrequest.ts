import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RejectGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn: string;
}
