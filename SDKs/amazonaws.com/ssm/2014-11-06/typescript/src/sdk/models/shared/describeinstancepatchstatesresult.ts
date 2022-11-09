import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstancePatchState } from "./instancepatchstate";


export class DescribeInstancePatchStatesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstancePatchStates", elemType: shared.InstancePatchState })
  instancePatchStates?: InstancePatchState[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
