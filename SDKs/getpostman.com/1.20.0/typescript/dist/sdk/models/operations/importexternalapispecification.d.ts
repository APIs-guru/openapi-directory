import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImportExternalApiSpecificationRequestBodyInputInfoLicense extends SpeakeasyBase {
    name?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputInfo extends SpeakeasyBase {
    license?: ImportExternalApiSpecificationRequestBodyInputInfoLicense;
    title?: string;
    version?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema extends SpeakeasyBase {
    format?: string;
    type?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters extends SpeakeasyBase {
    description?: string;
    in?: string;
    name?: string;
    required?: boolean;
    schema?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode extends SpeakeasyBase {
    format?: string;
    type?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage extends SpeakeasyBase {
    type?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties extends SpeakeasyBase {
    code?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode;
    message?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema extends SpeakeasyBase {
    properties?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties;
    required?: string[];
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson extends SpeakeasyBase {
    schema?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent extends SpeakeasyBase {
    applicationJson?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault extends SpeakeasyBase {
    content?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent;
    description?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses extends SpeakeasyBase {
    default?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPetsGet extends SpeakeasyBase {
    operationId?: string;
    parameters?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters[];
    responses?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses;
    summary?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPathsPets extends SpeakeasyBase {
    get?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGet;
}
export declare class ImportExternalApiSpecificationRequestBodyInputPaths extends SpeakeasyBase {
    rootPets?: ImportExternalApiSpecificationRequestBodyInputPathsPets;
}
export declare class ImportExternalApiSpecificationRequestBodyInputServers extends SpeakeasyBase {
    url?: string;
}
export declare class ImportExternalApiSpecificationRequestBodyInput extends SpeakeasyBase {
    info?: ImportExternalApiSpecificationRequestBodyInputInfo;
    openapi?: string;
    paths?: ImportExternalApiSpecificationRequestBodyInputPaths;
    servers?: ImportExternalApiSpecificationRequestBodyInputServers[];
}
export declare class ImportExternalApiSpecificationRequestBody extends SpeakeasyBase {
    input?: ImportExternalApiSpecificationRequestBodyInput;
    type?: string;
}
export declare class ImportExternalApiSpecification200ApplicationJsonCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class ImportExternalApiSpecification200ApplicationJson extends SpeakeasyBase {
    collections?: ImportExternalApiSpecification200ApplicationJsonCollections[];
}
export declare class ImportExternalApiSpecification400ApplicationJsonErrorDetails extends SpeakeasyBase {
    param?: string;
}
export declare class ImportExternalApiSpecification400ApplicationJsonError extends SpeakeasyBase {
    details?: ImportExternalApiSpecification400ApplicationJsonErrorDetails;
    message?: string;
    name?: string;
}
export declare class ImportExternalApiSpecification400ApplicationJson extends SpeakeasyBase {
    error?: ImportExternalApiSpecification400ApplicationJsonError;
}
export declare class ImportExternalApiSpecificationRequest extends SpeakeasyBase {
    request?: ImportExternalApiSpecificationRequestBody;
}
export declare class ImportExternalApiSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    importExternalApiSpecification200ApplicationJsonObject?: ImportExternalApiSpecification200ApplicationJson;
    importExternalApiSpecification400ApplicationJsonObject?: ImportExternalApiSpecification400ApplicationJson;
}
