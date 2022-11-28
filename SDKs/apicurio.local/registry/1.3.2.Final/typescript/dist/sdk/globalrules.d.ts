import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GlobalRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGlobalRule - Create global rule
     *
     * Adds a rule to the list of globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * The rule type is unknown (HTTP error `400`)
     * * The rule already exists (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    createGlobalRule(req: operations.CreateGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlobalRuleResponse>;
    /**
     * deleteAllGlobalRules - Delete all global rules
     *
     * Deletes all globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    deleteAllGlobalRules(config?: AxiosRequestConfig): Promise<operations.DeleteAllGlobalRulesResponse>;
    /**
     * deleteGlobalRule - Delete global rule
     *
     * Deletes a single global rule.  If this is the only rule configured, this is the same
     * as deleting **all** rules.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * Rule cannot be deleted (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    deleteGlobalRule(req: operations.DeleteGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalRuleResponse>;
    /**
     * getGlobalRuleConfig - Get global rule configuration
     *
     * Returns information about the named globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    getGlobalRuleConfig(req: operations.GetGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalRuleConfigResponse>;
    /**
     * listGlobalRules - List global rules
     *
     * Gets a list of all the currently configured global rules (if any).
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    listGlobalRules(config?: AxiosRequestConfig): Promise<operations.ListGlobalRulesResponse>;
    /**
     * updateGlobalRuleConfig - Update global rule configuration
     *
     * Updates the configuration for a globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    updateGlobalRuleConfig(req: operations.UpdateGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalRuleConfigResponse>;
}
