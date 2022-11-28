import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePatchState } from "./instancepatchstate";



export class DescribeInstancePatchStatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstancePatchStates", elemType: InstancePatchState })
  instancePatchStates?: InstancePatchState[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
