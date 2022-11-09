import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPrivacyPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPrivacyPolicies200ApplicationJsonStrings?: string[];
}
