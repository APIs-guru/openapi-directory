import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";



export class RestoreDbInstanceToPointInTimeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstance?: DbInstance;
}
