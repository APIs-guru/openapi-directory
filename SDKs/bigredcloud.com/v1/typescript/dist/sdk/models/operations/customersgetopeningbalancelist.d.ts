import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersGetOpeningBalanceListPathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class CustomersGetOpeningBalanceListRequest extends SpeakeasyBase {
    pathParams: CustomersGetOpeningBalanceListPathParams;
}
export declare class CustomersGetOpeningBalanceListResponse extends SpeakeasyBase {
    contentType: string;
    ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];
    statusCode: number;
}
