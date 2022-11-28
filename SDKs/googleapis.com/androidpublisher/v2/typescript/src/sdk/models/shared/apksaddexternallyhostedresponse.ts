import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";



export class ApksAddExternallyHostedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  externallyHostedApk?: ExternallyHostedApk;
}
