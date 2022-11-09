import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1EntityMetadata
/** 
 * Metadata common to many entities in this API.
**/
export class GoogleCloudApigeeV1EntityMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=subType" })
  subType?: string;
}
