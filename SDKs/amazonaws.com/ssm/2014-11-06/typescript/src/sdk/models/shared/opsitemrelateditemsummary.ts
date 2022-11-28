import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemIdentity } from "./opsitemidentity";



// OpsItemRelatedItemSummary
/** 
 * Summary information about related-item resources for an OpsItem.
**/
export class OpsItemRelatedItemSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationType" })
  associationType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: OpsItemIdentity;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: OpsItemIdentity;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceUri" })
  resourceUri?: string;
}
