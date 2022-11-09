import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";


export class GoogleCloudApigeeV1ReportProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=value", elemType: shared.GoogleCloudApigeeV1Attribute })
  value?: GoogleCloudApigeeV1Attribute[];
}
