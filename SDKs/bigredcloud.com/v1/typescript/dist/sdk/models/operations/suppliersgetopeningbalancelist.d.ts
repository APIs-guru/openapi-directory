import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersGetOpeningBalanceListPathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class SuppliersGetOpeningBalanceListRequest extends SpeakeasyBase {
    pathParams: SuppliersGetOpeningBalanceListPathParams;
}
export declare class SuppliersGetOpeningBalanceListResponse extends SpeakeasyBase {
    contentType: string;
    ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];
    statusCode: number;
}
