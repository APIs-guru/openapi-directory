import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1EntityMetadata } from "./googlecloudapigeev1entitymetadata";


// GoogleCloudApigeeV1SharedFlow
/** 
 * The metadata describing a shared flow
**/
export class GoogleCloudApigeeV1SharedFlow extends SpeakeasyBase {
  @Metadata({ data: "json, name=latestRevisionId" })
  latestRevisionId?: string;

  @Metadata({ data: "json, name=metaData" })
  metaData?: GoogleCloudApigeeV1EntityMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string[];
}
