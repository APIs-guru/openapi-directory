import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://nimble.{region}.amazonaws.com", "https://nimble.{region}.amazonaws.com", "http://nimble.{region}.amazonaws.com.cn", "https://nimble.{region}.amazonaws.com.cn"];
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
     * acceptEulas - Accept EULAs.
    **/
    acceptEulas(req: operations.AcceptEulasRequest, config?: AxiosRequestConfig): Promise<operations.AcceptEulasResponse>;
    /**
     * createLaunchProfile - Create a launch profile.
    **/
    createLaunchProfile(req: operations.CreateLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateLaunchProfileResponse>;
    /**
     * createStreamingImage - Creates a streaming image resource in a studio.
    **/
    createStreamingImage(req: operations.CreateStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingImageResponse>;
    /**
     * createStreamingSession - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
    **/
    createStreamingSession(req: operations.CreateStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingSessionResponse>;
    /**
     * createStreamingSessionStream - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
    **/
    createStreamingSessionStream(req: operations.CreateStreamingSessionStreamRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingSessionStreamResponse>;
    /**
     * createStudio - <p>Create a new Studio.</p> <p>When creating a Studio, two IAM roles must be provided: the admin role and the user Role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly.</p> <p>The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the StudioEncryptionConfiguration.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling CreateStudio to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
    **/
    createStudio(req: operations.CreateStudioRequest, config?: AxiosRequestConfig): Promise<operations.CreateStudioResponse>;
    /**
     * createStudioComponent - Creates a studio component resource.
    **/
    createStudioComponent(req: operations.CreateStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateStudioComponentResponse>;
    /**
     * deleteLaunchProfile - Permanently delete a launch profile.
    **/
    deleteLaunchProfile(req: operations.DeleteLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLaunchProfileResponse>;
    /**
     * deleteLaunchProfileMember - Delete a user from launch profile membership.
    **/
    deleteLaunchProfileMember(req: operations.DeleteLaunchProfileMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLaunchProfileMemberResponse>;
    /**
     * deleteStreamingImage - Delete streaming image.
    **/
    deleteStreamingImage(req: operations.DeleteStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingImageResponse>;
    /**
     * deleteStreamingSession - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
    **/
    deleteStreamingSession(req: operations.DeleteStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingSessionResponse>;
    /**
     * deleteStudio - Delete a studio resource.
    **/
    deleteStudio(req: operations.DeleteStudioRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioResponse>;
    /**
     * deleteStudioComponent - Deletes a studio component resource.
    **/
    deleteStudioComponent(req: operations.DeleteStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioComponentResponse>;
    /**
     * deleteStudioMember - Delete a user from studio membership.
    **/
    deleteStudioMember(req: operations.DeleteStudioMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioMemberResponse>;
    /**
     * getEula - Get Eula.
    **/
    getEula(req: operations.GetEulaRequest, config?: AxiosRequestConfig): Promise<operations.GetEulaResponse>;
    /**
     * getLaunchProfile - Get a launch profile.
    **/
    getLaunchProfile(req: operations.GetLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileResponse>;
    /**
     * getLaunchProfileDetails - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
    **/
    getLaunchProfileDetails(req: operations.GetLaunchProfileDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileDetailsResponse>;
    /**
     * getLaunchProfileInitialization - Get a launch profile initialization.
    **/
    getLaunchProfileInitialization(req: operations.GetLaunchProfileInitializationRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileInitializationResponse>;
    /**
     * getLaunchProfileMember - Get a user persona in launch profile membership.
    **/
    getLaunchProfileMember(req: operations.GetLaunchProfileMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileMemberResponse>;
    /**
     * getStreamingImage - Get streaming image.
    **/
    getStreamingImage(req: operations.GetStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingImageResponse>;
    /**
     * getStreamingSession - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
    **/
    getStreamingSession(req: operations.GetStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingSessionResponse>;
    /**
     * getStreamingSessionStream - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
    **/
    getStreamingSessionStream(req: operations.GetStreamingSessionStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingSessionStreamResponse>;
    /**
     * getStudio - Get a Studio resource.
    **/
    getStudio(req: operations.GetStudioRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioResponse>;
    /**
     * getStudioComponent - Gets a studio component resource.
    **/
    getStudioComponent(req: operations.GetStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioComponentResponse>;
    /**
     * getStudioMember - Get a user's membership in a studio.
    **/
    getStudioMember(req: operations.GetStudioMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioMemberResponse>;
    /**
     * listEulaAcceptances - List Eula Acceptances.
    **/
    listEulaAcceptances(req: operations.ListEulaAcceptancesRequest, config?: AxiosRequestConfig): Promise<operations.ListEulaAcceptancesResponse>;
    /**
     * listEulas - List Eulas.
    **/
    listEulas(req: operations.ListEulasRequest, config?: AxiosRequestConfig): Promise<operations.ListEulasResponse>;
    /**
     * listLaunchProfileMembers - Get all users in a given launch profile membership.
    **/
    listLaunchProfileMembers(req: operations.ListLaunchProfileMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListLaunchProfileMembersResponse>;
    /**
     * listLaunchProfiles - List all the launch profiles a studio.
    **/
    listLaunchProfiles(req: operations.ListLaunchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListLaunchProfilesResponse>;
    /**
     * listStreamingImages - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
    **/
    listStreamingImages(req: operations.ListStreamingImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamingImagesResponse>;
    /**
     * listStreamingSessions - Lists the streaming image resources in a studio.
    **/
    listStreamingSessions(req: operations.ListStreamingSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamingSessionsResponse>;
    /**
     * listStudioComponents - Lists the StudioComponents in a studio.
    **/
    listStudioComponents(req: operations.ListStudioComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListStudioComponentsResponse>;
    /**
     * listStudioMembers - Get all users in a given studio membership.
    **/
    listStudioMembers(req: operations.ListStudioMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListStudioMembersResponse>;
    /**
     * listStudios - List studios in your Amazon Web Services account in the requested Amazon Web Services Region.
    **/
    listStudios(req: operations.ListStudiosRequest, config?: AxiosRequestConfig): Promise<operations.ListStudiosResponse>;
    /**
     * listTagsForResource - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putLaunchProfileMembers - Add/update users with given persona to launch profile membership.
    **/
    putLaunchProfileMembers(req: operations.PutLaunchProfileMembersRequest, config?: AxiosRequestConfig): Promise<operations.PutLaunchProfileMembersResponse>;
    /**
     * putStudioMembers - Add/update users with given persona to studio membership.
    **/
    putStudioMembers(req: operations.PutStudioMembersRequest, config?: AxiosRequestConfig): Promise<operations.PutStudioMembersResponse>;
    /**
     * startStudioSsoConfigurationRepair - <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid Amazon Web Services SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid Amazon Web Services SSO configuration currently associated with it, then a new Amazon Web Services SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the Amazon Web Services SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
    **/
    startStudioSsoConfigurationRepair(req: operations.StartStudioSsoConfigurationRepairRequest, config?: AxiosRequestConfig): Promise<operations.StartStudioSsoConfigurationRepairResponse>;
    /**
     * tagResource - Creates tags for a resource, given its ARN.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deletes the tags for a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateLaunchProfile - Update a launch profile.
    **/
    updateLaunchProfile(req: operations.UpdateLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchProfileResponse>;
    /**
     * updateLaunchProfileMember - Update a user persona in launch profile membership.
    **/
    updateLaunchProfileMember(req: operations.UpdateLaunchProfileMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchProfileMemberResponse>;
    /**
     * updateStreamingImage - Update streaming image.
    **/
    updateStreamingImage(req: operations.UpdateStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingImageResponse>;
    /**
     * updateStudio - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
    **/
    updateStudio(req: operations.UpdateStudioRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStudioResponse>;
    /**
     * updateStudioComponent - Updates a studio component resource.
    **/
    updateStudioComponent(req: operations.UpdateStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStudioComponentResponse>;
}
export {};
