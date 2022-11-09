import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceAssociation
/** 
 * One or more association documents on the instance. 
**/
export class InstanceAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
