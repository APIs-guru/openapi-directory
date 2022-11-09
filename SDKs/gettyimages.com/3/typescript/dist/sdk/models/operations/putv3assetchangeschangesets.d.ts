import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutV3AssetChangesChangeSetsQueryParams extends SpeakeasyBase {
    batchSize?: number;
    channelId?: number;
}
export declare class PutV3AssetChangesChangeSetsRequest extends SpeakeasyBase {
    queryParams: PutV3AssetChangesChangeSetsQueryParams;
}
export declare class PutV3AssetChangesChangeSetsResponse extends SpeakeasyBase {
    assetChanges?: shared.AssetChanges;
    contentType: string;
    statusCode: number;
}
