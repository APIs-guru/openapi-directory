import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1EntityMetadata
/** 
 * Metadata common to many entities in this API.
**/
export class GoogleCloudApigeeV1EntityMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;
}
