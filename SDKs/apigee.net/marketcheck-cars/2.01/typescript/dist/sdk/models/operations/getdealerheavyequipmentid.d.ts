import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealerHeavyEquipmentIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDealerHeavyEquipmentIdQueryParams extends SpeakeasyBase {
    apiKey?: string;
    provider?: boolean;
}
export declare class GetDealerHeavyEquipmentIdRequest extends SpeakeasyBase {
    pathParams: GetDealerHeavyEquipmentIdPathParams;
    queryParams: GetDealerHeavyEquipmentIdQueryParams;
}
export declare class GetDealerHeavyEquipmentIdResponse extends SpeakeasyBase {
    contentType: string;
    dealer?: shared.Dealer;
    error?: shared.Error;
    statusCode: number;
}
