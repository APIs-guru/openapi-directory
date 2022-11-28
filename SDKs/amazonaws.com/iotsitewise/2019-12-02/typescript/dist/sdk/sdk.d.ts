import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://iotsitewise.{region}.amazonaws.com", "https://iotsitewise.{region}.amazonaws.com", "http://iotsitewise.{region}.amazonaws.com.cn", "https://iotsitewise.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateAssets - Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    associateAssets(req: operations.AssociateAssetsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAssetsResponse>;
    /**
     * batchAssociateProjectAssets - Associates a group (batch) of assets with an IoT SiteWise Monitor project.
    **/
    batchAssociateProjectAssets(req: operations.BatchAssociateProjectAssetsRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateProjectAssetsResponse>;
    /**
     * batchDisassociateProjectAssets - Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
    **/
    batchDisassociateProjectAssets(req: operations.BatchDisassociateProjectAssetsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateProjectAssetsResponse>;
    /**
     * batchPutAssetPropertyValue - <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>
    **/
    batchPutAssetPropertyValue(req: operations.BatchPutAssetPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutAssetPropertyValueResponse>;
    /**
     * createAccessPolicy - Creates an access policy that grants the specified identity (Amazon Web Services SSO user, Amazon Web Services SSO group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
    **/
    createAccessPolicy(req: operations.CreateAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccessPolicyResponse>;
    /**
     * createAsset - Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    createAsset(req: operations.CreateAssetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetResponse>;
    /**
     * createAssetModel - Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    createAssetModel(req: operations.CreateAssetModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetModelResponse>;
    /**
     * createDashboard - Creates a dashboard in an IoT SiteWise Monitor project.
    **/
    createDashboard(req: operations.CreateDashboardRequest, config?: AxiosRequestConfig): Promise<operations.CreateDashboardResponse>;
    /**
     * createGateway - Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    createGateway(req: operations.CreateGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CreateGatewayResponse>;
    /**
     * createPortal - <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses Amazon Web Services SSO or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>
    **/
    createPortal(req: operations.CreatePortalRequest, config?: AxiosRequestConfig): Promise<operations.CreatePortalResponse>;
    /**
     * createProject - Creates a project in the specified portal.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deleteAccessPolicy - Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
    **/
    deleteAccessPolicy(req: operations.DeleteAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessPolicyResponse>;
    /**
     * deleteAsset - <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
    **/
    deleteAsset(req: operations.DeleteAssetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssetResponse>;
    /**
     * deleteAssetModel - Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    deleteAssetModel(req: operations.DeleteAssetModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssetModelResponse>;
    /**
     * deleteDashboard - Deletes a dashboard from IoT SiteWise Monitor.
    **/
    deleteDashboard(req: operations.DeleteDashboardRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDashboardResponse>;
    /**
     * deleteGateway - Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
    **/
    deleteGateway(req: operations.DeleteGatewayRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGatewayResponse>;
    /**
     * deletePortal - Deletes a portal from IoT SiteWise Monitor.
    **/
    deletePortal(req: operations.DeletePortalRequest, config?: AxiosRequestConfig): Promise<operations.DeletePortalResponse>;
    /**
     * deleteProject - Deletes a project from IoT SiteWise Monitor.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * describeAccessPolicy - Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
    **/
    describeAccessPolicy(req: operations.DescribeAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccessPolicyResponse>;
    /**
     * describeAsset - Retrieves information about an asset.
    **/
    describeAsset(req: operations.DescribeAssetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAssetResponse>;
    /**
     * describeAssetModel - Retrieves information about an asset model.
    **/
    describeAssetModel(req: operations.DescribeAssetModelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAssetModelResponse>;
    /**
     * describeAssetProperty - <p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
    **/
    describeAssetProperty(req: operations.DescribeAssetPropertyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAssetPropertyResponse>;
    /**
     * describeDashboard - Retrieves information about a dashboard.
    **/
    describeDashboard(req: operations.DescribeDashboardRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDashboardResponse>;
    /**
     * describeDefaultEncryptionConfiguration - Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    describeDefaultEncryptionConfiguration(req: operations.DescribeDefaultEncryptionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDefaultEncryptionConfigurationResponse>;
    /**
     * describeGateway - Retrieves information about a gateway.
    **/
    describeGateway(req: operations.DescribeGatewayRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGatewayResponse>;
    /**
     * describeGatewayCapabilityConfiguration - Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
    **/
    describeGatewayCapabilityConfiguration(req: operations.DescribeGatewayCapabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGatewayCapabilityConfigurationResponse>;
    /**
     * describeLoggingOptions - Retrieves the current IoT SiteWise logging options.
    **/
    describeLoggingOptions(req: operations.DescribeLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingOptionsResponse>;
    /**
     * describePortal - Retrieves information about a portal.
    **/
    describePortal(req: operations.DescribePortalRequest, config?: AxiosRequestConfig): Promise<operations.DescribePortalResponse>;
    /**
     * describeProject - Retrieves information about a project.
    **/
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     * describeStorageConfiguration - Retrieves information about the storage configuration for IoT SiteWise.
    **/
    describeStorageConfiguration(req: operations.DescribeStorageConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStorageConfigurationResponse>;
    /**
     * disassociateAssets - Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
    **/
    disassociateAssets(req: operations.DisassociateAssetsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAssetsResponse>;
    /**
     * getAssetPropertyAggregates - <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
    **/
    getAssetPropertyAggregates(req: operations.GetAssetPropertyAggregatesRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetPropertyAggregatesResponse>;
    /**
     * getAssetPropertyValue - <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
    **/
    getAssetPropertyValue(req: operations.GetAssetPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetPropertyValueResponse>;
    /**
     * getAssetPropertyValueHistory - <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
    **/
    getAssetPropertyValueHistory(req: operations.GetAssetPropertyValueHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetPropertyValueHistoryResponse>;
    /**
     * getInterpolatedAssetPropertyValues - <p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
    **/
    getInterpolatedAssetPropertyValues(req: operations.GetInterpolatedAssetPropertyValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetInterpolatedAssetPropertyValuesResponse>;
    /**
     * listAccessPolicies - Retrieves a paginated list of access policies for an identity (an Amazon Web Services SSO user, an Amazon Web Services SSO group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
    **/
    listAccessPolicies(req: operations.ListAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessPoliciesResponse>;
    /**
     * listAssetModels - Retrieves a paginated list of summaries of all asset models.
    **/
    listAssetModels(req: operations.ListAssetModelsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetModelsResponse>;
    /**
     * listAssetRelationships - Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
    **/
    listAssetRelationships(req: operations.ListAssetRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetRelationshipsResponse>;
    /**
     * listAssets - <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
    **/
    listAssets(req: operations.ListAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetsResponse>;
    /**
     * listAssociatedAssets - <p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>
    **/
    listAssociatedAssets(req: operations.ListAssociatedAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedAssetsResponse>;
    /**
     * listDashboards - Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
    **/
    listDashboards(req: operations.ListDashboardsRequest, config?: AxiosRequestConfig): Promise<operations.ListDashboardsResponse>;
    /**
     * listGateways - Retrieves a paginated list of gateways.
    **/
    listGateways(req: operations.ListGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.ListGatewaysResponse>;
    /**
     * listPortals - Retrieves a paginated list of IoT SiteWise Monitor portals.
    **/
    listPortals(req: operations.ListPortalsRequest, config?: AxiosRequestConfig): Promise<operations.ListPortalsResponse>;
    /**
     * listProjectAssets - Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
    **/
    listProjectAssets(req: operations.ListProjectAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectAssetsResponse>;
    /**
     * listProjects - Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
    **/
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * listTagsForResource - Retrieves the list of tags for an IoT SiteWise resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putDefaultEncryptionConfiguration - Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    putDefaultEncryptionConfiguration(req: operations.PutDefaultEncryptionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutDefaultEncryptionConfigurationResponse>;
    /**
     * putLoggingOptions - Sets logging options for IoT SiteWise.
    **/
    putLoggingOptions(req: operations.PutLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutLoggingOptionsResponse>;
    /**
     * putStorageConfiguration - Configures storage settings for IoT SiteWise.
    **/
    putStorageConfiguration(req: operations.PutStorageConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutStorageConfigurationResponse>;
    /**
     * tagResource - Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a tag from an IoT SiteWise resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAccessPolicy - Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
    **/
    updateAccessPolicy(req: operations.UpdateAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccessPolicyResponse>;
    /**
     * updateAsset - Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.
    **/
    updateAsset(req: operations.UpdateAssetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetResponse>;
    /**
     * updateAssetModel - <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
    **/
    updateAssetModel(req: operations.UpdateAssetModelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetModelResponse>;
    /**
     * updateAssetProperty - <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
    **/
    updateAssetProperty(req: operations.UpdateAssetPropertyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetPropertyResponse>;
    /**
     * updateDashboard - Updates an IoT SiteWise Monitor dashboard.
    **/
    updateDashboard(req: operations.UpdateDashboardRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDashboardResponse>;
    /**
     * updateGateway - Updates a gateway's name.
    **/
    updateGateway(req: operations.UpdateGatewayRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGatewayResponse>;
    /**
     * updateGatewayCapabilityConfiguration - Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
    **/
    updateGatewayCapabilityConfiguration(req: operations.UpdateGatewayCapabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGatewayCapabilityConfigurationResponse>;
    /**
     * updatePortal - Updates an IoT SiteWise Monitor portal.
    **/
    updatePortal(req: operations.UpdatePortalRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePortalResponse>;
    /**
     * updateProject - Updates an IoT SiteWise Monitor project.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
export {};
