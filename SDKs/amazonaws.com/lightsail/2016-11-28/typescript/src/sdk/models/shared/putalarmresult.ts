import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



export class PutAlarmResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
