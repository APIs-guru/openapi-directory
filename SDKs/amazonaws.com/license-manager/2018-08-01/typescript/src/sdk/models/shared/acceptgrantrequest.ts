import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn: string;
}
