import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSpec } from "./resourcespec";



// TensorBoardAppSettings
/** 
 * The TensorBoard app settings.
**/
export class TensorBoardAppSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultResourceSpec" })
  defaultResourceSpec?: ResourceSpec;
}
