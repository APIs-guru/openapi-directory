import { SpeakeasyBase } from "../../../internal/utils";
import { AssetErrorCodeEnum } from "./asseterrorcodeenum";
/**
 * Contains error details for the requested associate project asset action.
**/
export declare class AssetErrorDetails extends SpeakeasyBase {
    assetId: string;
    code: AssetErrorCodeEnum;
    message: string;
}
