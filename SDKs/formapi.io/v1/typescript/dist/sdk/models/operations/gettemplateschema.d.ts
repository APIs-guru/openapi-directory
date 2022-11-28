import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTemplateSchemaPathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class GetTemplateSchemaSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class GetTemplateSchemaTemplateSchema extends SpeakeasyBase {
    dollarSchema?: string;
    additionalProperties?: boolean;
    definitions?: Map<string, any>;
    description?: string;
    id?: string;
    properties?: Map<string, any>;
    required?: any[];
    title?: string;
    type?: string;
}
export declare class GetTemplateSchemaRequest extends SpeakeasyBase {
    pathParams: GetTemplateSchemaPathParams;
    security: GetTemplateSchemaSecurity;
}
export declare class GetTemplateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    templateSchema?: GetTemplateSchemaTemplateSchema;
}
