import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Behaviors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * behaviorListForPath - List Behaviors by path
     *
     * List Behaviors by path
    **/
    behaviorListForPath(req: operations.BehaviorListForPathRequest, config?: AxiosRequestConfig): Promise<operations.BehaviorListForPathResponse>;
    /**
     * deleteBehaviorsId - Delete Behavior
     *
     * Delete Behavior
    **/
    deleteBehaviorsId(req: operations.DeleteBehaviorsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBehaviorsIdResponse>;
    /**
     * getBehaviors - List Behaviors
     *
     * List Behaviors
    **/
    getBehaviors(req: operations.GetBehaviorsRequest, config?: AxiosRequestConfig): Promise<operations.GetBehaviorsResponse>;
    /**
     * getBehaviorsId - Show Behavior
     *
     * Show Behavior
    **/
    getBehaviorsId(req: operations.GetBehaviorsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBehaviorsIdResponse>;
    /**
     * patchBehaviorsId - Update Behavior
     *
     * Update Behavior
    **/
    patchBehaviorsId(req: operations.PatchBehaviorsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBehaviorsIdResponse>;
    /**
     * postBehaviors - Create Behavior
     *
     * Create Behavior
    **/
    postBehaviors(req: operations.PostBehaviorsRequest, config?: AxiosRequestConfig): Promise<operations.PostBehaviorsResponse>;
    /**
     * postBehaviorsWebhookTest - Test webhook.
     *
     * Test webhook.
    **/
    postBehaviorsWebhookTest(req: operations.PostBehaviorsWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.PostBehaviorsWebhookTestResponse>;
}
