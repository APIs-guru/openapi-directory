import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1CertInfo } from "./googlecloudapigeev1certinfo";



export class GoogleCloudApigeeV1Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certInfo", elemType: GoogleCloudApigeeV1CertInfo })
  certInfo?: GoogleCloudApigeeV1CertInfo[];
}
