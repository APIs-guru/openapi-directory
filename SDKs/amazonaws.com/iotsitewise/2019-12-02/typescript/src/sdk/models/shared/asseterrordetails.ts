import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetErrorCodeEnum } from "./asseterrorcodeenum";



// AssetErrorDetails
/** 
 * Contains error details for the requested associate project asset action.
**/
export class AssetErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: AssetErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
