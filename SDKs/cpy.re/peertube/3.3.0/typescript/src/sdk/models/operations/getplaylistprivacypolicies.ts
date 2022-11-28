import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPlaylistPrivacyPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPlaylistPrivacyPolicies200ApplicationJsonStrings?: string[];
}
