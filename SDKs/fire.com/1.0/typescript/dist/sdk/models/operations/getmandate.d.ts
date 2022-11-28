import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMandatePathParams extends SpeakeasyBase {
    mandateUuid: string;
}
export declare class GetMandateRequest extends SpeakeasyBase {
    pathParams: GetMandatePathParams;
}
export declare class GetMandateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems?: shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems;
}
