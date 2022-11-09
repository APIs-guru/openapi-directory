import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ApiProduct } from "./googlecloudapigeev1apiproduct";


export class GoogleCloudApigeeV1ListApiProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProduct", elemType: shared.GoogleCloudApigeeV1ApiProduct })
  apiProduct?: GoogleCloudApigeeV1ApiProduct[];
}
