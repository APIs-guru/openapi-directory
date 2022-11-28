import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EntityMetadata } from "./googlecloudapigeev1entitymetadata";



// GoogleCloudApigeeV1SharedFlow
/** 
 * The metadata describing a shared flow
**/
export class GoogleCloudApigeeV1SharedFlow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latestRevisionId" })
  latestRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=metaData" })
  metaData?: GoogleCloudApigeeV1EntityMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string[];
}
