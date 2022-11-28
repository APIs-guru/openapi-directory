import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatus } from "./associationstatus";



export class UpdateAssociationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationStatus" })
  associationStatus: AssociationStatus;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
