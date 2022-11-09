import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantArn" })
  grantArn: string;
}
