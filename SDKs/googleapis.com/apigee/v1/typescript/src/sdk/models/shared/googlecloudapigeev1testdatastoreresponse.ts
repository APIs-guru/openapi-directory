import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1TestDatastoreResponse
/** 
 * The response for TestDatastore
**/
export class GoogleCloudApigeeV1TestDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
