import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceAssociation
/** 
 * One or more association documents on the instance. 
**/
export class InstanceAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
