import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDirectDebitByUuidPathParams extends SpeakeasyBase {
    directDebitUuid: string;
}
export declare class GetDirectDebitByUuidRequest extends SpeakeasyBase {
    pathParams: GetDirectDebitByUuidPathParams;
}
export declare class GetDirectDebitByUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems?: shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems;
}
