import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPrivacyPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPrivacyPolicies200ApplicationJsonStrings?: string[];
}
