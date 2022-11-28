import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersGetOpeningBalancePathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class CustomersGetOpeningBalanceRequest extends SpeakeasyBase {
    pathParams: CustomersGetOpeningBalancePathParams;
}
export declare class CustomersGetOpeningBalanceResponse extends SpeakeasyBase {
    contentType: string;
    ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;
    statusCode: number;
}
