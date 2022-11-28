import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportExternalApiSpecificationRequestBodyInputInfoLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: ImportExternalApiSpecificationRequestBodyInputInfoLicense;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: string[];
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application/json" })
  applicationJson?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPetsGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters })
  parameters?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters[];

  @SpeakeasyMetadata({ data: "json, name=responses" })
  responses?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}


export class ImportExternalApiSpecificationRequestBodyInputPathsPets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=get" })
  get?: ImportExternalApiSpecificationRequestBodyInputPathsPetsGet;
}


export class ImportExternalApiSpecificationRequestBodyInputPaths extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=/pets" })
  rootPets?: ImportExternalApiSpecificationRequestBodyInputPathsPets;
}


export class ImportExternalApiSpecificationRequestBodyInputServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ImportExternalApiSpecificationRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: ImportExternalApiSpecificationRequestBodyInputInfo;

  @SpeakeasyMetadata({ data: "json, name=openapi" })
  openapi?: string;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: ImportExternalApiSpecificationRequestBodyInputPaths;

  @SpeakeasyMetadata({ data: "json, name=servers", elemType: ImportExternalApiSpecificationRequestBodyInputServers })
  servers?: ImportExternalApiSpecificationRequestBodyInputServers[];
}


export class ImportExternalApiSpecificationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: ImportExternalApiSpecificationRequestBodyInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ImportExternalApiSpecification200ApplicationJsonCollections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class ImportExternalApiSpecification200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: ImportExternalApiSpecification200ApplicationJsonCollections })
  collections?: ImportExternalApiSpecification200ApplicationJsonCollections[];
}


export class ImportExternalApiSpecification400ApplicationJsonErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=param" })
  param?: string;
}


export class ImportExternalApiSpecification400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: ImportExternalApiSpecification400ApplicationJsonErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ImportExternalApiSpecification400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImportExternalApiSpecification400ApplicationJsonError;
}


export class ImportExternalApiSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ImportExternalApiSpecificationRequestBody;
}


export class ImportExternalApiSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  importExternalApiSpecification200ApplicationJsonObject?: ImportExternalApiSpecification200ApplicationJson;

  @SpeakeasyMetadata()
  importExternalApiSpecification400ApplicationJsonObject?: ImportExternalApiSpecification400ApplicationJson;
}
