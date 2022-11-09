import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";


export class GoogleCloudApigeeV1Attributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute", elemType: shared.GoogleCloudApigeeV1Attribute })
  attribute?: GoogleCloudApigeeV1Attribute[];
}
