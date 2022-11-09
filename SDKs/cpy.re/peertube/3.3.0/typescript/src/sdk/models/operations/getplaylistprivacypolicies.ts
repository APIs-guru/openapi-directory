import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPlaylistPrivacyPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPlaylistPrivacyPolicies200ApplicationJsonStrings?: string[];
}
