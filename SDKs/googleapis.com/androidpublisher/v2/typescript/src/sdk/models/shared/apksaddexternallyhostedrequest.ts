import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";



export class ApksAddExternallyHostedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externallyHostedApk" })
  externallyHostedApk?: ExternallyHostedApk;
}
