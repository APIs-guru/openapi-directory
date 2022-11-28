import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Api {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createApi - Create API
     *
     * This call creates a new API with a default API Version.
     *
     * Request body should contain an `api` object which should atleast have a property `name`.
     *
     * Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createApi(req: operations.CreateApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiResponse>;
    /**
     * createApiVersion - Create API Version
     *
     * This call creates a new API version in the specified API.
     *
     * Request body should contain a `version` object which should have fields:
     *
     * <table>
     * <tr>
     * 	<td>name</td>
     * 	<td>Required. Name of the API Version</td>
     * </tr>
     * <tr>
     * 	<td>source</td>
     * 	<td>
     * 		If specified, it will copy the contents of the specified api version to create a new api verison.
     * 		<table>
     * 			<tr>
     * 				<td>id</td>
     * 				<td>Required. Id of the apiversion from where the details are to be copied</td>
     * 			</tr>
     * 			<tr>
     * 				<td>schema</td>
     * 				<td>Boolean. If true then copies the schema from the specified api version</td>
     * 			</tr>
     * 			<tr>
     * 				<td>relations</td>
     * 				<td>Object. {"&lt;relationType&gt;": true/false}.
     * 					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
     * 				Relation types which should be copied over to the new api verison</td>
     * 			</tr>
     * 		</table>
     * 	</td>
     * </tr>
     * </table>
     *
     * Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createApiVersion(req: operations.CreateApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiVersionResponse>;
    /**
     * createCollectionFromSchema - Create collection from schema
     *
     * This call creates a collection and links it to an API as one or multiple relations.
     *
     * Request body requires two keys:
     * - `name` - Name of the collection to be created.
     * - `relations` - A list of relation(s) to be created.
     *
     * The allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createCollectionFromSchema(req: operations.CreateCollectionFromSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CreateCollectionFromSchemaResponse>;
    /**
     * createRelations - Create relations
     *
     * This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs.
     *
     * <table>
     *   <tr>
     *     <th>Relation</th>
     *     <th>Entity ID type</th>
     *   <tr>
     *   <tr>
     *     <td>contracttest</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>integrationtest</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>documentation</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>testsuite</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>environment</td>
     *     <td>Environment UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>mock</td>
     *     <td>Mock IDs</td>
     *   </tr>
     *   <tr>
     *     <td>monitor</td>
     *     <td>Monitor IDs</td>
     *   </tr>
     * </table>
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createRelations(req: operations.CreateRelationsRequest, config?: AxiosRequestConfig): Promise<operations.CreateRelationsResponse>;
    /**
     * createSchema - Create Schema
     *
     * This call creates a new schema.
     *
     * Request body should contain a `schema` object which should atleast have these properties with `string` values:
     *
     * - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
     * - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
     * - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
     *
     * Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createSchema(req: operations.CreateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CreateSchemaResponse>;
    /**
     * deleteAnApi - Delete an API
     *
     * This call deletes an existing API having the specified id.
     *
     * Response contains an `api` object with `id` of the API which was deleted.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    deleteAnApi(req: operations.DeleteAnApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnApiResponse>;
    /**
     * deleteAnApiVersion - Delete an API Version
     *
     * This call deletes an existing API Version having the specified id.
     *
     * Response contains an `version` object with `id` of the API Version which was deleted.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    deleteAnApiVersion(req: operations.DeleteAnApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnApiVersionResponse>;
    /**
     * getAllApIs - Get all APIs
     *
     * This call fetches all the APIs present in the specified workspace
     *
     * Response contains an array named `apis` which would contain all the details of APIs present in the workspace.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getAllApIs(req: operations.GetAllApIsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllApIsResponse>;
    /**
     * getAllApiVersions - Get All API Versions
     *
     * This call fetches details about the all the API Versions in the specified API.
     *
     * The response will contain an array `versions` object which would be a list of all the API Version along with their details.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getAllApiVersions(req: operations.GetAllApiVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllApiVersionsResponse>;
    /**
     * getAnApiVersion - Get an API Version
     *
     * This call fetches details about the specified API Version.
     *
     * The response will contain a `version` object which would contain all the details of the API Version.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getAnApiVersion(req: operations.GetAnApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetAnApiVersionResponse>;
    /**
     * getContractTestRelations - Get contract test relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     *
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getContractTestRelations(req: operations.GetContractTestRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetContractTestRelationsResponse>;
    /**
     * getDocumentationRelations - Get  documentation relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     *
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getDocumentationRelations(req: operations.GetDocumentationRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentationRelationsResponse>;
    /**
     * getEnvironmentRelations - Get environment relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     *
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getEnvironmentRelations(req: operations.GetEnvironmentRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentRelationsResponse>;
    /**
     * getIntegrationTestRelations - Get integration test relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     *
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getIntegrationTestRelations(req: operations.GetIntegrationTestRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationTestRelationsResponse>;
    /**
     * getLinkedRelations - Get linked relations
     *
     * This call fetches all the relations which are linked to the specified API version along with their details.
     *
     * The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getLinkedRelations(req: operations.GetLinkedRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinkedRelationsResponse>;
    /**
     * getMonitorRelations - Get monitor relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     *
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getMonitorRelations(req: operations.GetMonitorRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetMonitorRelationsResponse>;
    /**
     * getSchema - Get Schema
     *
     * This call fetches a single schema having the specified id.
     *
     * Response contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getSchema(req: operations.GetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * getTestSuiteRelations - Get test suite relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     *
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    getTestSuiteRelations(req: operations.GetTestSuiteRelationsRequest, config?: AxiosRequestConfig): Promise<operations.GetTestSuiteRelationsResponse>;
    /**
     * singleApi - Single API
     *
     * This call fetches a single API having the specified id.
     *
     * Response contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    singleApi(req: operations.SingleApiRequest, config?: AxiosRequestConfig): Promise<operations.SingleApiResponse>;
    /**
     * syncRelationsWithSchema - Sync relations with schema
     *
     * This call allows you to keep the relation in sync with the API schema.
     *
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    syncRelationsWithSchema(req: operations.SyncRelationsWithSchemaRequest, config?: AxiosRequestConfig): Promise<operations.SyncRelationsWithSchemaResponse>;
    /**
     * updateAnApi - Update an API
     *
     * This call updates an existing API .
     *
     * Request body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.
     *
     * Response contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    updateAnApi(req: operations.UpdateAnApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnApiResponse>;
    /**
     * updateAnApiVersion - Update an API Version
     *
     * This call updates an existing API Version.
     *
     * Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.
     *
     * Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    updateAnApiVersion(req: operations.UpdateAnApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnApiVersionResponse>;
    /**
     * updateSchema - Update Schema
     *
     * This call updates an existing schema.
     *
     * Request body should contain a `schema` object which should atleast have these properties with `string` values:
     *
     * - **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.
     * - **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.
     * - **`schema`**: Optional. If passed, must be the content of the schema as a `string`.
     *
     * Response contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    updateSchema(req: operations.UpdateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSchemaResponse>;
}
