import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
