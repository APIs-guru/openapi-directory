import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceState } from "./instancestate";



export class GetInstanceStateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceState;
}
