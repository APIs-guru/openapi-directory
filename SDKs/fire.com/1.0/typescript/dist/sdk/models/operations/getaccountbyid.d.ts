import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountByIdPathParams extends SpeakeasyBase {
    ican: number;
}
export declare class GetAccountByIdRequest extends SpeakeasyBase {
    pathParams: GetAccountByIdPathParams;
}
export declare class GetAccountByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}
