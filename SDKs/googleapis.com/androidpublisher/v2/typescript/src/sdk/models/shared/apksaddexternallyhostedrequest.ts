import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";


export class ApksAddExternallyHostedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=externallyHostedApk" })
  externallyHostedApk?: ExternallyHostedApk;
}
