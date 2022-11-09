import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportExternalApiSpecificationRequestBodyInputInfoLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=license" })
  license?: ImportExternalApiSpecificationRequestBodyInputInfoLicense;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=in" })
  in?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=schema" })
  schema?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode;

  @Metadata({ data: "json, name=message" })
  message?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties;

  @Metadata({ data: "json, name=required" })
  required?: string[];
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=application/json" })
  applicationJson?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent;

  @Metadata({ data: "json, name=description" })
  description?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=parameters", elemType: operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters })
  parameters?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters[];

  @Metadata({ data: "json, name=responses" })
  responses?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses;

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPets extends SpeakeasyBase {
  @Metadata({ data: "json, name=get" })
  get?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGet;
}


export class ImportExternalApiSpecificationRequestBodyInputPaths extends SpeakeasyBase {
  @Metadata({ data: "json, name=/pets" })
  rootPets?: ImportExternalApiSpecificationRequestBodyInputPathsPets;
}


export class ImportExternalApiSpecificationRequestBodyInputServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ImportExternalApiSpecificationRequestBodyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: ImportExternalApiSpecificationRequestBodyInputInfo;

  @Metadata({ data: "json, name=openapi" })
  openapi?: string;

  @Metadata({ data: "json, name=paths" })
  paths?: ImportExternalApiSpecificationRequestBodyInputPaths;

  @Metadata({ data: "json, name=servers", elemType: operations.ImportExternalApiSpecificationRequestBodyInputServers })
  servers?: ImportExternalApiSpecificationRequestBodyInputServers[];
}


export class ImportExternalApiSpecificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: ImportExternalApiSpecificationRequestBodyInput;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ImportExternalApiSpecificationRequestBody;
}


export class ImportExternalApiSpecification200ApplicationJsonCollections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class ImportExternalApiSpecification200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: operations.ImportExternalApiSpecification200ApplicationJsonCollections })
  collections?: ImportExternalApiSpecification200ApplicationJsonCollections[];
}


export class ImportExternalApiSpecification400ApplicationJsonErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=param" })
  param?: string;
}


export class ImportExternalApiSpecification400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: ImportExternalApiSpecification400ApplicationJsonErrorDetails;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ImportExternalApiSpecification400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImportExternalApiSpecification400ApplicationJsonError;
}


export class ImportExternalApiSpecificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  importExternalApiSpecification200ApplicationJsonObject?: ImportExternalApiSpecification200ApplicationJson;

  @Metadata()
  importExternalApiSpecification400ApplicationJsonObject?: ImportExternalApiSpecification400ApplicationJson;
}
