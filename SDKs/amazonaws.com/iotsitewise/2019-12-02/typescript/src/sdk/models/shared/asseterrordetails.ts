import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetErrorCodeEnum } from "./asseterrorcodeenum";


// AssetErrorDetails
/** 
 * Contains error details for the requested associate project asset action.
**/
export class AssetErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetId" })
  assetId: string;

  @Metadata({ data: "json, name=code" })
  code: AssetErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message: string;
}
