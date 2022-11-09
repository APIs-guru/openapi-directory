import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1CertInfo } from "./googlecloudapigeev1certinfo";


export class GoogleCloudApigeeV1Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certInfo", elemType: shared.GoogleCloudApigeeV1CertInfo })
  certInfo?: GoogleCloudApigeeV1CertInfo[];
}
