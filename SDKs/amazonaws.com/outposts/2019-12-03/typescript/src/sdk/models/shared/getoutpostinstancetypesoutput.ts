import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeItem } from "./instancetypeitem";



export class GetOutpostInstanceTypesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceTypes", elemType: InstanceTypeItem })
  instanceTypes?: InstanceTypeItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=OutpostId" })
  outpostId?: string;
}
