import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceMetadata } from "./instancemetadata";


export class ListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances", elemType: shared.InstanceMetadata })
  instances?: InstanceMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
