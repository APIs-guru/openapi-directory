import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersGetOpeningBalancePathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class SuppliersGetOpeningBalanceRequest extends SpeakeasyBase {
    pathParams: SuppliersGetOpeningBalancePathParams;
}
export declare class SuppliersGetOpeningBalanceResponse extends SpeakeasyBase {
    contentType: string;
    ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;
    statusCode: number;
}
