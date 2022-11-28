import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiVersion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
}
