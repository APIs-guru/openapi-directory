import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiProduct } from "./googlecloudapigeev1apiproduct";



export class GoogleCloudApigeeV1ListApiProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProduct", elemType: GoogleCloudApigeeV1ApiProduct })
  apiProduct?: GoogleCloudApigeeV1ApiProduct[];
}
