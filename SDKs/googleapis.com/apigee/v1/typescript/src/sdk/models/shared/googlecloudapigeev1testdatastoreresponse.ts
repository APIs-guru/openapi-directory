import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1TestDatastoreResponse
/** 
 * The response for TestDatastore
**/
export class GoogleCloudApigeeV1TestDatastoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
