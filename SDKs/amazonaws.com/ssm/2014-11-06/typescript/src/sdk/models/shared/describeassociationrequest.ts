import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
