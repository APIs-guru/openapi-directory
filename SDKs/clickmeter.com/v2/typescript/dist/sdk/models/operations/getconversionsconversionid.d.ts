import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversionsConversionIdPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare class GetConversionsConversionIdRequest extends SpeakeasyBase {
    pathParams: GetConversionsConversionIdPathParams;
}
export declare class GetConversionsConversionIdResponse extends SpeakeasyBase {
    apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
