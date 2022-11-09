import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
/** 
 * Represents a SecurityProfileEnvironmentAssociation resource.
**/
export class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachTime" })
  attachTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=securityProfileRevisionId" })
  securityProfileRevisionId?: string;
}
