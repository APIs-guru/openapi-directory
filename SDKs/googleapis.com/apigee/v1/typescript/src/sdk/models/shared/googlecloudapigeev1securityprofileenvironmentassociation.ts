import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput
/** 
 * Represents a SecurityProfileEnvironmentAssociation resource.
**/
export class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileRevisionId" })
  securityProfileRevisionId?: string;
}


// GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
/** 
 * Represents a SecurityProfileEnvironmentAssociation resource.
**/
export class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachTime" })
  attachTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileRevisionId" })
  securityProfileRevisionId?: string;
}
