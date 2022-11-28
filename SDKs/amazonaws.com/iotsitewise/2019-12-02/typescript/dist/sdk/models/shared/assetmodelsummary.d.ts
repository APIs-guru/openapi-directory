import { SpeakeasyBase } from "../../../internal/utils";
import { AssetModelStatus } from "./assetmodelstatus";
/**
 * Contains a summary of an asset model.
**/
export declare class AssetModelSummary extends SpeakeasyBase {
    arn: string;
    creationDate: Date;
    description: string;
    id: string;
    lastUpdateDate: Date;
    name: string;
    status: AssetModelStatus;
}
