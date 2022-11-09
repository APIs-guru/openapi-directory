import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceSpec } from "./resourcespec";


// TensorBoardAppSettings
/** 
 * The TensorBoard app settings.
**/
export class TensorBoardAppSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultResourceSpec" })
  defaultResourceSpec?: ResourceSpec;
}
