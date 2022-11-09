import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationStatus } from "./associationstatus";


export class UpdateAssociationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationStatus" })
  associationStatus: AssociationStatus;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
