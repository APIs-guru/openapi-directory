import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Relations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * syncRelationsWithSchema - Sync relations with schema
     *
     * This call allows you to keep the relation in sync with the API schema.
     *
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    syncRelationsWithSchema(req: operations.SyncRelationsWithSchemaRequest, config?: AxiosRequestConfig): Promise<operations.SyncRelationsWithSchemaResponse>;
}
