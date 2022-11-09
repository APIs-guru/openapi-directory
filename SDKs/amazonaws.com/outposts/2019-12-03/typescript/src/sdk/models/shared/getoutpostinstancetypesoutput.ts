import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceTypeItem } from "./instancetypeitem";


export class GetOutpostInstanceTypesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceTypes", elemType: shared.InstanceTypeItem })
  instanceTypes?: InstanceTypeItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @Metadata({ data: "json, name=OutpostId" })
  outpostId?: string;
}
