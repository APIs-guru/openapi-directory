import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";



export class GoogleCloudApigeeV1ReportProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=value", elemType: GoogleCloudApigeeV1Attribute })
  value?: GoogleCloudApigeeV1Attribute[];
}
