import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcceptGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantArn" })
  grantArn: string;
}
