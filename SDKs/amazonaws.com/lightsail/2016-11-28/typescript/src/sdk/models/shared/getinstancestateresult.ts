import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceState } from "./instancestate";


export class GetInstanceStateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: InstanceState;
}
